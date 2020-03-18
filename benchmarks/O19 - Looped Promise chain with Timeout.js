/**
 * Looped Promise chain, with Timeout
 * (C19 but with `for...of`)
 */
//const a = [ 1, 2, 3, 4, 5 ]

let chain = Promise.resolve();

for ( const i of [ 1, 2, 3, 4, 5 ]/*a*/ ) {
	chain = chain.then( () => new Promise( r => {
		setTimeout( () => {
			console.log( i );
			r();
		}, 1000 );
	} ) );
}