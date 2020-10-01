new Promise( r => setTimeout( r, 1000, 'p2' ) )
	.then( v => console.log( v ) || v )
	.then( v => console.log( v ) || v )
	.catch( v => console.log( v ) || v )
;