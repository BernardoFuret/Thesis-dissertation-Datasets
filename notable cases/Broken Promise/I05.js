/**
 * The empty `then` propagates the value through the default
 * `onFulfilled` reaction.
 * Two chains on the same starting Promise to test getting the
 * branching positions.
 */

const logValue = v => ( console.log( 'Value:', v ) || v );

const p1 = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

p1
	.then()
	.then( logValue )
;

p1
	.then()
	.then( logValue )
;
