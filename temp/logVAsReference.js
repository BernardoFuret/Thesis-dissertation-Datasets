/**
 * > I06: Unnecessary Promise
 *
 * `logV` reference is accepted correctly by TAJS.
 */
const logV = v => console.log( v );

new Promise( r => r( 1 ) )
	.then( v => new Promise( r => r( v + 1 ) ) )
	.then( logV )
;