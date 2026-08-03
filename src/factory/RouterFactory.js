import { LayerFactory } from "./LayerFactory.js";
const factoryRouter = () => {
  const createMethods = (method) => (path, ...hooks) => {
    const layer = new LayerFactory(method, path, hooks).getLayer();
    return layer;
  };
  return {
    get: createMethods("GET"),
    post: createMethods("POST"),
    put: createMethods("PUT"),
    delete: createMethods("DELETE"),
  };
};
export { factoryRouter };
