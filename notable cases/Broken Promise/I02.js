/**
 * > Broken Promise chain.
 *
 * Should be sequential, but the developer registered the
 * `logValue` reaction on the resulting Promise by mistake,
 * instead of registering it on the resulting Promise after
 * decrementing. 
 */
const logValue = v => console.log( 'Value should be 1:', v );

const increment = v => v + 1;

const decrement = v => v - 1;

const p = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

const p2 = p.then( increment );

p2.then( decrement );

p2.then( logValue );