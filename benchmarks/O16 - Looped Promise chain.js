/**
 * Looped Promise chain
 * (C18 but with `for...of`)
 */
//const a = [ 1, 2, 3, 4, 5 ];

let chain = Promise.resolve();

for ( const i of [ 1, 2, 3, 4, 5 ]/*a*/ ) {
	chain = chain.then( () => console.log( i ) );
}