class Stack {
  constructor() {
    this.layers = [];
  }
  add(layer) {
    // console.log(JSON.parse(layer));

    this.layers.push(layer);
    //return this;
  }
  getLayers() {
    console.log(`Getting layers: ${this.layers}`);
    return this.layers;
  }
}
export { Stack };
