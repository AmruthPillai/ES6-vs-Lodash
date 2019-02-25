const _ = require('lodash')
const { performance } = require('perf_hooks');
const n = 100000;

// Step 1: Generating the Array
const random = (MIN = 1, MAX = 100) => Math.floor(Math.random() * Math.floor(MAX)) + MIN
const j = []

for (let i = 0; i < n; i++) {
  j.push({
    num: random()
  })
}

// ES6: [].map()
const es6 = () => {
  let a = performance.now()
  j.map(item => {
    return item.num
  })
  let b = performance.now()

  return b - a;
}

// Loadash: _.map([])
const lodash = () => {
  let a = performance.now()
  _.map(j, item => {
    return item.num
  })
  let b = performance.now()

  return b - a;
}

// Step 2a: Executing ES6 Benchmark
let es6_results = [];
for (let i = 0; i < 100; i++) {
  es6_results.push(es6())
}

// Step 2b: Executing Lodash Benchmark
let lodash_results = [];
for (let i = 0; i < 100; i++) {
  lodash_results.push(lodash())
}

// Step 3: Calculate Performance Metrics
const es6ElapsedTime = _.mean(es6_results).toFixed(3)
const lodashElapsedTime = _.mean(lodash_results).toFixed(3)

// Step 3: Tabulate Results
console.log(`
\t\tES6\t\tLodash
Time Elapsed\t${es6ElapsedTime} ms\t${lodashElapsedTime} ms
`)