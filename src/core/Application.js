import { ServerHttp } from "../server/ServerHttp.js";
import { RouterService } from "../service/Router.service.js";

class Application {
  constructor() {
    this.routerService = new RouterService();
    this.server = new ServerHttp(this.routerService);
  }

  get(path, ...hooks) {
    this.routerService.setGet(path, ...hooks);
    return this;
  }

  post(path, ...hooks) {
    this.routerService.setPost(path, ...hooks);
    return this;
  }

  put(path, ...hooks) {
    this.routerService.setPut(path, ...hooks);
    return this;
  }

  delete(path, ...hooks) {
    this.routerService.setDelete(path, ...hooks);
    return this;
  }

  use(prefix, router) {
    this.routerService.setUse(prefix, router);
    return this;
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }
}
export { Application };
