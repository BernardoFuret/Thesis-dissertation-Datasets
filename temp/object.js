/**
 * > I06: Unnecessary Promise
 *
 * `{}` is not a function, so default identity
 * callback is used instead. Resolves with 2.
 */
new Promise( r => r( 1 ) )
	.then( v => new Promise( r => r( v + 1 ) ) )
	.then( {} )
;