/**
 * Promise with `then` and `catch` reactions.
 */
const p = new Promise( ( resolve, reject ) => {
	if ( Math.random() < 0.5 ) {
		resolve( "A" );
	} else {
		reject( "B" );
	}
} )
	.then( v => console.log( "Result is A:", v ) )
	.catch( v => console.warn( "Result is B:", v ) )
;
