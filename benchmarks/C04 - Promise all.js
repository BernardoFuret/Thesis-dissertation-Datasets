/**
 * > Promise all
 *
 * Correct example of Promise race use.
 */
const p1 = new Promise( r => setTimeout( r, Math.random() * 1000, 'p1' ) );

const p2 = new Promise( r => setTimeout( r, Math.random() * 1000, 'p2' ) );

Promise.all( [ p1, p2 ] )
	.then( v => console.log( 'resolved p1 and p2:', v ) )
;