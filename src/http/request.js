import http from "http";
import { sanatizePath } from "../utils/sanatizePath.js";

/**
 * @typedef {Record<string, string | string[] | undefined>} Headers
 */

class Request {
  /** @type {http.IncomingMessage} */
  raw;

  /** @type {string} */
  method;

  /** @type {string} */
  path;

  /** @type {Headers} */
  headers;

  /**
   * @param {http.IncomingMessage} req
   */
  constructor(req) {
    this.raw = req;

    this.method = req.method ?? "GET";
    this.path = sanatizePath(req.url ?? "/");
    this.headers = req.headers;
  }

  /**
   * @returns {string | undefined}
   */
  getIP() {
    return this.raw.socket.remoteAddress;
  }

  /**
   * @returns {string}
   */
  getMethod() {
    return this.method;
  }

  /**
   * @returns {string}
   */
  getPath() {
    return this.path;
  }

  /**
   * @returns {Headers}
   */
  getHeaders() {
    return this.headers;
  }

  /**
   * @returns {Promise<string>}
   */
  getBody() {
    return new Promise((resolve, reject) => {
      let body = "";
      this.raw.on("data", (/** @type {Buffer} */ chunk) => {
        body += chunk.toString();
      });
      this.raw.on("end", () => {
        resolve(body);
      });
      this.raw.on("error", (/** @type {Error} */ err) => {
        reject(err);
      });
    });
  }
}
export { Request };
