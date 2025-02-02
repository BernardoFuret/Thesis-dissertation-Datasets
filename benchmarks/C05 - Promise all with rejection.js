/**
 * > Promise all with rejection
 *
 * `p2` will reject, so the `catch` reaction will be called.
 */
const p1 = new Promise( (rs, rj) => setTimeout( rs, 5000, 'p1' ) );

const p2 = new Promise( (rs, rj) => setTimeout( rj, 1000, 'p2' ) );

Promise.all( [ p1, p2 ] )
	.then( v => console.log( 'resolved p1 and p2:', v ) )
	.catch( v => console.warn( 'promise failed:', v ) )
;
