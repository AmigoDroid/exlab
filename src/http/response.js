import http from "http";
/**
 * @typedef {http.ServerResponse &{
 * send: (text:String)=> void,
 * json: (object:unknown) => void,
 * status: (code: number) => ExResponse
 * }} ExResponse
 */
class Response {
  /**@type {ExResponse}*/
  res;
  /**
   *
   * @param {http.ServerResponse} res
   */
  constructor(res) {
    /** @type {ExResponse} */
    const extended = /** @type {ExResponse} */ (res);
    this.res = extended;
    ///add send
    /**
     * @this {ExResponse}
     * @param {string} text
     * @returns {void}
     */
    extended.send = function (text) {
      this.writeHead(this.statusCode || 200, {
        "Content-Type": "text/plain",
      });
      this.end(text);
    };
    //add json
    /**
     * @this {ExResponse}
     * @param {unknown} obj
     * @returns {void}
     */
    extended.json = function (obj) {
      this.writeHead(this.statusCode || 200, {
        "Content-Type": "application/json",
      });
      this.end(JSON.stringify(obj));
    };
    //add status
    /**
     * @this {ExResponse}
     * @param {number} code
     * @returns {ExResponse}
     */
    // @ts-ignore
    extended.status = function (code) {
      this.statusCode = code;
      return this;
    };
  }
}
export { Response };
