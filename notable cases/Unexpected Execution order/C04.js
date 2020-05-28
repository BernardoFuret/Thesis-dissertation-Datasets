/**
 * > Unexpected Execution Order (setTimeout)
 *
 * `o.print` will only be available on the next iteration.
 */
const o = {};

setTimeout( () => {
	o.print( 'test' );
}, 0 );

o.print = console.log;
