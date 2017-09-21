function htmlCollectionForEach() {
  HTMLCollection.prototype.forEach = Array.prototype.forEach
}

export default () => {
  htmlCollectionForEach()
}
