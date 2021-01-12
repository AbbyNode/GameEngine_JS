import { GameComponent, GameComponentType } from "./GameComponent.js";

/**
 * Component Based Design implementation.
 * GameObject(s) contain an array of GameComponent(s)
 * GameObject(s) can contain child GameObject(s) and can have a reference to a parent GameObject
 *
 * @export
 * @abstract
 * @class GameObject
 */
export abstract class GameObject {
	private _components: GameComponent[];

	private _parent: GameObject | undefined;
	private _children: GameObject[];

	//#region props
	
	public get components() : GameComponent[] {
		return this._components;
	}

	public get parent() : GameObject | undefined {
		return this._parent;
	}
	
	public get children() : GameObject[] {
		return this._children;
	}
	
	//#endregion

	constructor(parent?: GameObject) {
		this._components = [];
		
		// If parent is defined, add this obj as child
		if (parent != undefined) {
			parent.addChild(this);
			this._parent = parent;
		}

		this._children = [];
	}

	//#region Components

	/**
	 * Adds specified component to this GameObject
	 *
	 * @template T
	 * @param {GameComponentType<T>} gameComponentType
	 * @param {T} component
	 * @memberof GameObject
	 */
	public addComponent<T extends GameComponent>(gameComponentType: GameComponentType<T>, component: T): void {
		if (this.hasComponent(gameComponentType)) {
			throw new Error("GameObject already has a component of type: " + gameComponentType.name);
		} else {
			this.components.push(component);
		}
	}

	/**
	 * Returns component of type gameComponentType if it exists. Otherwise returns undefined.
	 *
	 * @template T
	 * @param {GameComponentType<T>} gameComponentType
	 * @returns {(T | undefined)}
	 * @memberof GameObject
	 */
	public getComponent<T extends GameComponent>(gameComponentType: GameComponentType<T>): T | undefined {
		let component = undefined;

		this.components.some(component => {
			if (component instanceof gameComponentType) {
				component = component;
				return;
			}
		});

		return component;
	}
	
	/**
	 * Returns whether this GameObject has component of type gameComponentType
	 *
	 * @template T
	 * @param {GameComponentType<T>} gameComponentType
	 * @returns {boolean}
	 * @memberof GameObject
	 */
	public hasComponent<T extends GameComponent>(gameComponentType: GameComponentType<T>): boolean {
		return (this.getComponent(gameComponentType) != undefined);
	}

	//#endregion

	//#region Container

	public addChild(child: GameObject) {
		this.children.push(child);
	}

	public removeChild(child: GameObject) {
		let index = this.children.indexOf(child);
		if (index >= 0) {
			this.children.splice(index, 1);
		}
	}

	//#endregion
}
