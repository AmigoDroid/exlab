class Stack {
  constructor() {
    this.layers = [];
  }
  add(layer) {
    this.layers.push(layer);
  }
  getLayers() {
    return this.layers;
  }
}
export { Stack };
