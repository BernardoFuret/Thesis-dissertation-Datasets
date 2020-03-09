/**
 * > I06: Unnecessary Promise
 *
 * `console.log` is not accepted as function if passed by reference,
 * with regards to TAJS, since, despite `console` is globally defined,
 * it's not for the TAJS environment. But this way, wrapped in another
 * function, this anonymous function will generate a node.
 */
new Promise( r => r( 1 ) )
	.then( v => new Promise( r => r( v + 1 ) ) )
	.then( v => console.log( v ) )
;