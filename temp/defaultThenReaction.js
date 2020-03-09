/**
 * > I06: Unnecessary Promise
 *
 * Identity function, equivalent to empty `then` or non-function `then`.
 */
new Promise( r => r( 1 ) )
	.then( v => new Promise( r => r( v + 1 ) ) )
	.then( v => v )
;