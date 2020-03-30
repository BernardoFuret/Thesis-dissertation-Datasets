/**
 * > Unnecessary Promise
 *
 * Nested Promise contains reactions.
 */
new Promise( r => r( 1 ) )
	.then( v => new Promise( r => r( v + 1 ) )
		.then( console.log )
		.catch( console.warn )
		.then( () => { throw 'E'; } )
		.then( console.log )
	 )
	.then( console.log, console.error )
;