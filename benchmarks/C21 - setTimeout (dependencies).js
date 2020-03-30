/**
 * > setTimeout (dependencies)
 *
 * `o.print` will already be available on the next iteration.
 */
const o = {};

setTimeout( () => {
	o.print( 'Program ended; Stack is empty; Sync code is done.' );
}, 500 );

o.print = console.log;