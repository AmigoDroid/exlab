
class Layer {
  /**
   *
   * @param {String} method
   * @param {String} path
   * @param {Array<Function>} hooks
   */
  constructor(method, path, hooks) {
    this.method = method;
    this.path = path;
    this.hooks = hooks;
    }
    /**
     *
     * @param {String} method
     * @param {String} path
     * @returns
     */
  match(method, path) {
    return this.method === method && this.path === path;
    }
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} nexthook 
 */
  handle(req, res, nexthook) {
    let index = 0;
    const next = () => {
      const hook = this.hooks[index++];
      if (!hook) return nexthook();

      hook(req, res, next);
    };

    next();
  }
}
export { Layer };
