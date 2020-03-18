/**
 * Looped Promise chain.
 * (C18 but with `for...of` and same callback)
 */
//const a = [ 1, 2, 3, 4, 5 ];

let chain = Promise.resolve();

function cb() {
	console.log( 'iteration' );
}

for ( const i of [ 1, 2, 3, 4, 5 ]/*a*/ ) {
	chain = chain.then( cb );
}