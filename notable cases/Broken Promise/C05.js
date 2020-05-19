/**
 * The empty `then` propagates the value through the default
 * `onFulfilled` reaction.
 * Test with the empty `catch`
 */

const logError = v => ( console.error( 'Error:', v ) || v );

const p1 = new Promise( ( resolve, reject ) => {
	reject( 1 );
} );

p1
	.catch()
	.catch( logError )
;
