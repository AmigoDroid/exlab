import { Stack } from "../core/Stack.js";
import { LayerFactory } from "../factory/LayerFactory.js";
class RouterService {
  constructor() {
    this.stack = new Stack();
  }
  setGet(path, ...hooks) {
    const layer = new LayerFactory("GET", path, hooks).getLayer();
    this.stack.add(layer);
    return this;
  }
  setPost(path, ...hooks) {
    const layer = new LayerFactory("POST", path, hooks).getLayer();
    this.stack.add(layer);
    return this;
  }
  setPut(path, ...hooks) {
    const layer = new LayerFactory("PUT", path, hooks).getLayer();
    this.stack.add(layer);
    return this;
  }
  setDelete(path, ...hooks) {
    const layer = new LayerFactory("DELETE", path, hooks).getLayer();
    this.stack.add(layer);
    return this;
  }
  setUse(prefix, router) {
    const layers = router.layers;
    layers.forEach((layer) => {
      const newLayer = new LayerFactory(
        layer.method,
        prefix + layer.path,
        layer.hooks,
      ).getLayer();
      this.stack.add(newLayer);
    });
  }
  handle(request, response) {
    const layers = this.stack.getLayers();

    let index = 0;

    const next = () => {
      const layer = layers[index++];

      // acabou a stack
      if (!layer) {
        response.status(404).send("Not Found");
        return;
      }

      // método diferente
      if (layer.method !== request.method) {
        return next();
      }

      // caminho diferente
      if (layer.path !== request.path) {
        return next();
      }

      // encontrou a rota
      this.executeHooks(layer.hooks, request, response);
    };

    next();
  }
  executeHooks(hooks, request, response) {
    let index = 0;

    const next = () => {
      const hook = hooks[index++];

      if (!hook) {
        return;
      }

      hook(request, response, next);
    };

    next();
  }
}
export { RouterService };
