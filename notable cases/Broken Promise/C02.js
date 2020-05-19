/**
 * `p1` resolves with 1.
 * `p2` is the result of incrementing it.
 * `p3` is the result of logging the increment (expecting 2).
 * `p4` is the same as `p3`.
 * `p5` is the result of registering again on `p1`, this time, decrementing.
 * `p6` is the result of logging the decrement (expecting 0).
 *
 * These can be seen as cases of broken Promises, because `p1` was branched.
 * However, this is not necessarily a bug.
 */

const increment = v => v + 1;

const decrement = v => v - 1;

const logValue0 = v => console.log( 'Value should be 0:', v );

const logValue2 = v => console.log( 'Value should be 2:', v );

const p1 = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

const p2 = p1.then( increment );

const p3 = p2.then( logValue2 );

const p4 = p2.then( logValue2 );

const p5 = p1.then( decrement );

const p6 = p5.then( logValue0 );
