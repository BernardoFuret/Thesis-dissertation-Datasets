/**
 * > Broken Promise chain.
 *
 * Should be sequential, but the developer registered the
 * `logValue` reaction on the original Promise, instead 
 * of registering it on the resulting Promise after incrementing. 
 */
const logValue = v => console.log( 'Value should be 2:', v );

const increment = v => v + 1;

const p = new Promise( ( resolve, reject ) => {
	resolve( 1 );
} );

p.then( increment );

p.then( logValue );
