class Request {
  constructor(req) {
    this.raw = req;

    this.method = req.method;
    this.path = req.url;
    this.headers = req.headers;
  }
  w;
  getIP() {
    return this.raw.socket.remoteAddress;
  }
  getMethod() {
    return this.method;
  }
  getPath() {
    return this.path;
  }
  getHeaders() {
    return this.headers;
  }
  getBody() {
    return new Promise((resolve, reject) => {
      let body = "";
      this.raw.on("data", (chunk) => {
        body += chunk.toString();
      });
      this.raw.on("end", () => {
        resolve(body);
      });
    });
  }
}
export { Request };
