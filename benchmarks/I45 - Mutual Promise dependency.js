/**
 * > Mutual dependency
 *
 * The inner Promise gets stuck, waiting for `p2`.
 * But `p2` will only resolve if the inner Promise reaches
 * the third `then`.
 */
var p2 = new Promise( r => {
	Promise.resolve()
		.then( () => p2 )
		.then( v => console.log( 'Done', v ) )
		.then( () => r() )
	;
} );
