/**
 * > Broken Promise chain.
 *
 * The value is incremented, then logged (as 2).
 * Then there's some code in the middle, that is not microtask code.
 * Then the intent is to decrement the value and logging (as 1).
 * What may give away this is not intentional is the fact that
 * there is some code in between that has a different place
 * in the event loop.
 * The fact that `logValue` here also returns a value, may
 * hint that the value is supposed to be used after being logged.
 * Correct assumption would be:
 * ```js
 * p
 * 	.then( increment ).then( logValue )
 *  .then( decrement ).then( logValue )	
 * ;
 * ```
 */
const logValue = d => v => ( console.log( `Expecting value as ${d}:`, v ) || v );

const increment = v => v + 1;

const decrement = v => v - 1;

const p = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

p.then( increment ).then( logValue( 2 ) );

// Some code ...

p.then( decrement ).then( logValue( 1 ) );