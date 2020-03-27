/**
 * > Unexpected Execution Order (Promise)
 *
 * `o.print` will only be available on the next iteration.
 */
const o = {};

Promise.resolve().then( () => {
	o.print = console.log;
} );

o.print( 'test' );