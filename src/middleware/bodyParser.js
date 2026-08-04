async function bodyParserMiddleware(req, res, next) {
  req.body == (await req.getBody());
  next();
}
export { bodyParserMiddleware };
