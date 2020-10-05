/**
 * Based on https://github.com/nuprl/PromiseKeeper/blob/9d244db90315b467e80fd3240896496d5d7526d8/tests-unit/input/BrokenPromiseChain.js
 */
function f () {
	var p = new Promise(function (resolve, reject) {
		resolve( 'world' );
	});
	p.then(function addHello(v) {
		return 'hello ' + v;
	});
	return p;
}
var p2 = f();
p2.then(function finalize(x) {
	console.log(x);
});