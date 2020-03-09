/**
 * > I06: Unnecessary Promise
 *
 * `console.log` is not accepted as function, with
 * regards to TAJS, since `console` is globally defined,
 * but not for the TAJS environment, apparently.
 */
new Promise( r => r( 1 ) )
	.then( v => new Promise( r => r( v + 1 ) ) )
	.then( console.log )
;