/**
 * Component Based Design implementation.
 * GameObject(s) contain an array of GameComponent(s)
 *
 * @export
 * @abstract
 * @class GameObject
 */
export class GameObject {
    //#endregion
    constructor() {
        this._components = [];
    }
    //#region props
    get components() {
        return this._components;
    }
}
//# sourceMappingURL=GameObject.js.map