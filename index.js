
var Q = require('q');

module.exports = function(tasks) {
  return tasks.reduce(function(promise, task) {
    return promise.then(task);
  }, Q.resolve());
}
