/**
 * > Promise race
 *
 * Correct example of Promise race use, with rejection.
 * Race will always fulfill after the first fulfillment,
 * whether it resolves or rejects.
 */
const p1 = new Promise( (rs, rj) => setTimeout( rs, Math.random() * 1000, 'p1' ) );

const p2 = new Promise( (rs, rj) => setTimeout( rj, Math.random() * 1000, 'p2' ) );

Promise.race( [ p1, p2 ] )
	.then( v => console.log( 'resolved:', v ) )
	.catch( v => console.warn( 'rejected:', v ) )
;
