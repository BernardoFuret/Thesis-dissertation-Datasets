/**
 * Looped Promise chain, with Timeout
 * (C19 but with `for...of` and same callback)
 */
//const a = [ 1, 2, 3, 4, 5 ]

let chain = Promise.resolve();

function cb() {
	return new Promise( r => {
		setTimeout( () => {
			console.log( 'iteration' );
			r();
		}, 1000 );
	} );
}

for ( const i of [ 1, 2, 3, 4, 5 ]/*a*/ ) {
	chain = chain.then( cb );
}