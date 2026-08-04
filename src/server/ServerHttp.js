import http from "http";
import { Request } from "../http/request.js";
import { Response } from "../http/response.js";
class ServerHttp {
  constructor(router) {
    this.router = router;

    this.server = http.createServer(this.handleRequest.bind(this));
  }

  handleRequest(req, res) {
    new Response(res);
    const requeste = new Request(req);

    console.log(this.router);

    this.router.handle(requeste, res);
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }
}
export { ServerHttp };
