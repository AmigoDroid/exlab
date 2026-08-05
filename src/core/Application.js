import { ServerHttp } from "../server/ServerHttp.js";
import { RouterService } from "../service/Router.service.js";
import { Router } from "./Router.js";

class Application {
  constructor() {
    this.routerService = new RouterService();
    this.server = new ServerHttp(this.routerService);
  }
  /**
   *
   * @param {String} path
   * @param  {Array<Router>} hooks
   * @returns
   */
  get(path, ...hooks) {
    this.routerService.setGet(path, ...hooks);
    return this;
  }

  /**
   *
   * @param {String} path
   * @param  {Array<Router>} hooks
   * @returns
   */
  post(path, ...hooks) {
    this.routerService.setPost(path, ...hooks);
    return this;
  }

  /**
   *
   * @param {String} path
   * @param  {Array<Router>} hooks
   * @returns
   */
  put(path, ...hooks) {
    this.routerService.setPut(path, ...hooks);
    return this;
  }
  /**
   *
   * @param {String} path
   * @param  {Array<Router>} hooks
   * @returns
   */
  delete(path, ...hooks) {
    this.routerService.setDelete(path, ...hooks);
    return this;
  }
  /**
   *
   * @param {String} pathOrFn
   * @param {Function} pathOrFn
   * @param {Function} maybeRouter
   * @returns
   */
  use(pathOrFn, maybeRouter) {
    this.routerService.setUse(pathOrFn, maybeRouter);
    return this;
  }

  /**
   *
   * @param {number} port
   * @param {Function} callback
   */
  listen(port, callback) {
    this.server.listen(port, callback);
  }
}
export { Application };
