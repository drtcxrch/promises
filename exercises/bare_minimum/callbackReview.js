/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // callback(fs.readfile);
  fs.readFile(filePath, 'utf8', function(err, content) {
    if(err) {
      callback(err);
    }
    var firstLine = content.split('\n')[0]
    callback(err, firstLine)
  })
  //callback arguments - (err, firstLine)
  //fs.readFile arguments (filePath, utf8, function(err, content))
  //fs. reads a filepath
  //if (err), callback(err)
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  //should invoke the callback with an error as the first argument
  //should invoke the callback with the status code as the second argument
  //should accept a callback as it's last argument
  //response.statusCode
  request(url, function(err, response, body) {
    if(err) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};