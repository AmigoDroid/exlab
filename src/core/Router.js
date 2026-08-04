import { RouterService } from "../service/Router.service.js";
import { Request } from "../http/request.js";
import { Response } from "../http/response.js";
import { LayerFactory } from "../factory/LayerFactory.js";
class Router {
  constructor() {
    this.layers = [];
  }
  get(path, ...hooks) {
    const layer = new LayerFactory("GET", path, hooks).getLayer();
    this.layers.push(layer);
  }
  post(path, ...hooks) {
    const layer = new LayerFactory("POST", path, hooks).getLayer();
    this.layers.push(layer);
  }
  put(path, ...hooks) {
    const layer = new LayerFactory("PUT", path, hooks).getLayer();
    this.layers.push(layer);
  }
  delete(path, ...hooks) {
    const layer = new LayerFactory("DELETE", path, hooks).getLayer();
    this.layers.push(layer);
  }
  //sem uso por equanto
  use(hooks) {
    return this;
  }
  //sem uso
  middleware() {
    return (req, res, next) => {
      this.handle(req, res, next);
    };
  }
}
export { Router };
