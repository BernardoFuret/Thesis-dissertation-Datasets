/**
 * Two chains starting with the same resolved Promise.
 */

const logValue = op => v => console.log( `Value from ${op}:`, v );

const increment = v => v + 1;

const decrement = v => v - 1;

const p = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

p.then( increment ).then( logValue( 'increment' ) );

p.then( decrement ).then( logValue( 'decrement' ) );