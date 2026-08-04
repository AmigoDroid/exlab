class Layer {
  constructor(method, path, hooks) {
    this.method = method;
    this.path = path;
    this.hooks = hooks;
  }
  match(method, path) {
    return this.method === method && this.path === path;
  }
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
