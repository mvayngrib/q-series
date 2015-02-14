## Usage

```
// see tests for an example
var series = require('q-series');
var tasks = [
  ..task1..,
  ..task2..,
  ..task3..
];

// each task in tasks will not be started until the task before it has finished (resolved)
series(tasks);
```
