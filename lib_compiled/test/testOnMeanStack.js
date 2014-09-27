// Generated by CoffeeScript 1.7.1
(function() {
  var IS_RE_CREATE_TEST_FILES, NodeUglifier, fs, packageUtils, path;

  fs = require('fs');

  NodeUglifier = require("../NodeUglifier");

  packageUtils = require('../libs/packageUtils');

  path = require('path');

  IS_RE_CREATE_TEST_FILES = false;

  exports.testStuff = function(test) {
    var mergedSource, mergedSourceString, nodeUglifier, uglifiedSourceString, uglifyReultFolder, uglifySourceMap;
    uglifySourceMap = "lib_compiled/test/resultFiles/sourcemaps/server.sourcemaps.js";
    uglifyReultFolder = "lib_compiled/test/resultFiles/";
    nodeUglifier = new NodeUglifier("./lib_compiled/test/testproject2/server.js", {
      rngSeed: "hello"
    });
    mergedSource = nodeUglifier.merge();
    mergedSourceString = mergedSource.toString();
    if (IS_RE_CREATE_TEST_FILES) {
      nodeUglifier.exportToFile(uglifyReultFolder + "server.compiled_not_uglified.js");
    }
    uglifiedSourceString = mergedSource.uglify({
      strProtectionLvl: 1
    }).toString();
    if (IS_RE_CREATE_TEST_FILES) {
      nodeUglifier.exportToFile(uglifyReultFolder + "server.compiled.js");
    }
    if (IS_RE_CREATE_TEST_FILES) {
      nodeUglifier.exportSourceMaps(uglifySourceMap);
    }
    test.equals(packageUtils.readFile(uglifyReultFolder + "server.compiled_not_uglified.js").toString(), mergedSourceString);
    test.equals(packageUtils.readFile(uglifyReultFolder + "server.compiled.js").toString(), uglifiedSourceString);
    return test.done();
  };

}).call(this);

//# sourceMappingURL=testOnMeanStack.map
