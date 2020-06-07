/**
 * To debug spotting broken Promises.
 * Both `a` and `b` register on the same
 * Promise object. They do not represent
 * a broken Promise, because their dependent
 * queue object is the same, though.
 */

const a = v => console.log( 'A:', v );

const b = v => console.error( 'B:', v );

const p1 = new Promise( ( resolve, reject ) => {
	if ( Math.random() < 0.5 ) {
		resolve( 'A' );
	} else {
		reject( 'B' );
	}
} );

const p2 = p1.then( a, b );
