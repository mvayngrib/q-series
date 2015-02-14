
var test = require('tape');
var series = require('../');
var Q = require('q');

test('finish in order', function(t) {
  t.plan(6);

  var numFinished = 0;
  var numStarted = 0;
  var tasks = [
    function() {
      t.equal(numStarted++, 0);
      return Q.Promise(function(resolve) {
        setTimeout(function() {
          t.equal(numFinished++, 0);
          resolve();
        }, 200);
      })
    },
    function() {
      t.equal(numStarted++, 1);
      return Q.Promise(function(resolve) {
        setTimeout(function() {
          t.equal(numFinished++, 1);
          resolve();
        }, 100);
      })
    },
    function() {
      t.equal(numStarted++, 2);
      return Q.Promise(function(resolve) {
        setTimeout(function() {
          t.equal(numFinished++, 2);
          resolve();
        }, 300);
      })
    }
  ];

  series(tasks);
});
