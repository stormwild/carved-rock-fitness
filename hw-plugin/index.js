class HelloWorldPlugin {
  // apply method
  apply(compiler) {
    // hook into the parts of the build lifecycle
    compiler.hooks.done.tap("HelloWorldPlugin", (stats) => {
      console.log("Hello world!");
    });
  }
}

module.exports = HelloWorldPlugin;
