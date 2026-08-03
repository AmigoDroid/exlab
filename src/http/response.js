class Response {
  constructor(res) {
    this.res = res;
  }
  method() {
    return this.res.method;
  }
  path() {
    return this.res.path;
  }
  headers() {
    return this.res.headers;
  }
  send(text) {
    this.res.writeHead(200, { "Content-Type": "text/plain" });
    this.res.end(text);
  }
  json(data) {
    this.res.writeHead(200, { "Content-Type": "application/json" });
    this.res.end(JSON.stringify(data));
  }
}
export { Response };
