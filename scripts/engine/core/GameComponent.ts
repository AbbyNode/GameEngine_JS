import { GameObject } from "./GameObject.js";

/**
 * Component Based Design implementation.
 * GameComponent(s) can be added to GameObject(s) depending on requried functionality.
 *
 * @export
 * @abstract
 * @class GameComponent
 */
export abstract class GameComponent {
	private _gameObject: GameObject;

	//#region props
	
	public get gameObject() : GameObject {
		return this._gameObject;
	}
	
	//#endregion

	constructor(gameObject: GameObject) {
		this._gameObject = gameObject;
	}
}

export interface GameComponentType<T extends GameComponent> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	new(...args: any[]): T;
}
