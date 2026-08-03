import { Layer } from "../core/Layer.js";
class LayerFactory {
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
    setLayers(path, router) {
      
  }
}
export { LayerFactory };
