import { LifeCycleObject as LifeCycleObjectA } from "../interface/LifeCycleObject.js"

export class LifeCycleObject extends LifeCycleObjectA {
	private _stage: createjs.Stage;
	private _container: createjs.Container;

	constructor(stage: createjs.Stage, container: createjs.Container) {
		super();
		this._stage = stage;
		this._container = container;
	}
	
	// TODO: figure out coupling of EventManager

	public init(): void {
		this._stage.addChild(this._container);
		// this.eventManager.invoke(EventName.GameObject_Init, stage);
	}

	public update(): void {
		// this.eventManager.invoke(EventName.GameObject_Update);
	}

	public destroy(): void {
		// this.eventManager.invoke(EventName.GameObject_Destroy);
	}
}