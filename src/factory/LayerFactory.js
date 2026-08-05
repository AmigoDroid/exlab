import { Layer } from "../core/Layer.js";
import { Router } from "../core/Router.js";
class LayerFactory {
  /**
   *
   * @param {String} method
   * @param {String} path
   * @param {Array<Function>} hooks
   */
  constructor(method, path, hooks) {
    this.method = method;
    this.path = path;
    this.hooks = hooks;
  }
  getLayer() {
    return new Layer(this.method, this.path, this.hooks);
  }
}

class GerateLayers {
  constructor() {
    this.routesLayer = [];
  }
  /**
   *
   * @param {String} path
   * @param {Router} router
   */
  setLayers(path, router) {}
}
export { LayerFactory };
