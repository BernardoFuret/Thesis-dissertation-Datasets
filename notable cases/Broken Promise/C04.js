/**
 * The empty `then` propagates the value through the default
 * `onFulfilled` reaction.
 * Test with the empty `then`
 */

const logValue = v => ( console.log( 'Value:', v ) || v );

const p1 = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

p1
	.then()
	.then( logValue )
	.then()
	.then( logValue )
;
