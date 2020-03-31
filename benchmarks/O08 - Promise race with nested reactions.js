/**
 * > Promise race
 *
 * Correct example of Promise race use.
 * Race will always fulfill after the first fulfillment,
 * whether it resolves or rejects.
 * Case where the Promises to sync have reactions registered.
 */
const logAndRet = v => ( console.log( v ) || v );

const p1 = new Promise( (rs, rj) => setTimeout( rs, Math.random() * 1000, 'p1' ) )
	.then( logAndRet );

const p2 = new Promise( (rs, rj) => setTimeout( rs, Math.random() * 1000, 'p2' ) )
	.catch( logAndRet );

Promise.race( [ p1, p2 ] )
	.then( v => console.log( 'resolved:', v ) )
;
