import http from "http";
import { Request } from "../http/request.js";
import { Response } from "../http/response.js";
class ServerHttp {
  constructor(router) {
    this.router = router;

    this.server = http.createServer(this.handleRequest.bind(this));
  }

  handleRequest(req, res) {
    const request = new Request(req);
    const response = new Response(res);

    console.log(this.router);

    // this.router.handle(request, response);
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }
}
export { ServerHttp };
