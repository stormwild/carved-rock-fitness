// source is a file or text from previous loader
module.exports = function (source) {
  if (this.mode === "production" && source.indexOf("console.log")) {
    // throw an error
    this.emitError("console.log discovered in the code");
  }
  return source;
};
