/**
 * > Promise race
 *
 * Correct example of Promise race use.
 */
const p1 = new Promise( r => setTimeout( r, Math.random() * 1000, 'p1' ) );

const p2 = new Promise( r => setTimeout( r, Math.random() * 1000, 'p2' ) );

Promise.race( [ p1, p2 ] )
	.then( v => console.log( 'resolved p1 or p2:', v ) )
;
