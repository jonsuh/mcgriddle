var mcgriddle = require("./index");

module.exports = function(eyeglass, sass) {
  return {
    sassDir: mcgriddle.includePaths[0]
  };
};
