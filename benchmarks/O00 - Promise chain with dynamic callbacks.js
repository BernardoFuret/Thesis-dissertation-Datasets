/**
 * Simple Promise chain
 */
function increment( i ) {
	return function( v ) {
		return v + i;
	}
}
function decrement( d ) {
	return function( v ) {
		return v - d;
	}
}

const p = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} )
	.then( increment( 1 ) )
	.then( decrement( 1 ) )
	.then( increment( 2 ) )
	.then( decrement( 2 ) )
	.then( increment( 1 ) )
	.then( decrement( 1 ) )
	.then( console.log, console.warn )
;
