/**
 * Increments 1 to 2 and then logs.
 */
const logValue = v => console.log( "Value should be 2:", v );

const increment = v => v + 1;

const p1 = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

const p2 = p1.then( increment );

const p3 = p2.then( logValue );
