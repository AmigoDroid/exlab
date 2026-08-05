import http from "http";
/**
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {function} next
 */
async function bodyParserMiddleware(req, res, next) {
  /**
   *
   */
  req.body == (await req.getBody());
  next();
}
export { bodyParserMiddleware };
