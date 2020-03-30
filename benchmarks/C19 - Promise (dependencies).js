/**
 * > Promise (Dependencies)
 *
 * `o.print` will already be available on the next iteration.
 */
const o = {};

Promise.resolve().then( () => {
	o.print( 'test' );
} );

o.print = console.log;