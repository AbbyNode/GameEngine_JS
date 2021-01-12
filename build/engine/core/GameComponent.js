/**
 * Component Based Design implementation.
 * GameComponent(s) can be added to GameObject(s) depending on requried functionality.
 *
 * @export
 * @abstract
 * @class GameComponent
 */
export class GameComponent {
    //#endregion
    constructor(gameObject) {
        this._gameObject = gameObject;
    }
    //#region props
    get gameObject() {
        return this._gameObject;
    }
}
//# sourceMappingURL=GameComponent.js.map