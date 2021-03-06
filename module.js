import * as path from "path";

const notificationModule = function(moduleOptions) {
  const options = {
    requestPermissionImediate: false,
    baseOptions: {},
    ...moduleOptions
  };

  this.addPlugin({
    src: path.resolve(__dirname, "./plugin.js"),
    options,
    mode: "client"
  });
};

export default notificationModule;

// REQUIRED if publishing the module as npm package
export const meta = require("./package.json");
