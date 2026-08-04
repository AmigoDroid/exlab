class Response {
  constructor(res) {
    this.res = res;
    ///add send
    this.res.send = function (text) {
      this.writeHead(this.statusCode || 200, {
        "Content-Type": "text/plain",
      });
      this.end(text);
    };
    //add json
    this.res.json = function (obj) {
      this.writeHead(this.statusCode || 200, {
        "Content-Type": "application/json",
      });
      this.end(JSON.stringify(obj));
    };
    //add status
    this.res.status = function (code) {
      this.statusCode = code;
      return this;
    };
  }
}
export { Response };
