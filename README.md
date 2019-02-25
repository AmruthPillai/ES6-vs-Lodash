# `[].map()` vs `_.map()`

Here, I try to performance benchmark the speed complexity of the native ES6 `Array.map()` over the famous lodash library's `_.map(Array)` function. The results were quite surprising to say the least.

## Running the Test

```console
$ node test
```

## Reading the Output

Mapping over an Array of **1,000 objects**:
```
		ES6		Lodash
Time Elapsed	0.037 ms	0.040 ms
```

Mapping over an Array of **10,000 objects**:
```
		ES6		Lodash
Time Elapsed	0.159 ms	0.159 ms
```

Mapping over an Array of **100,000 objects**:
```
		ES6		Lodash
Time Elapsed	11.870 ms	1.701 ms
```

Mapping over an Array of **1,000,000 objects**:
```
		ES6		Lodash
Time Elapsed	120.790 ms	16.513 ms
```

## Conclusion

We don't tend to see much of a difference with really small arrays (< 10,000 objects), but when it really gets large, which is a rare case on the frontend, lodash seems to be performing better than ES6's own native `.map` function.

If you feel like I have performed the test incorrectly, or you have any other metrics which can be shared, then please fork this repo, make your suggested changes and make a pull request.