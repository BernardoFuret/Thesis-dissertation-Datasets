/**
 * Microtasks will always execute between the macrotasks (the two `setTimeout`).
 */
setTimeout( () => {
	console.log( 'ST1' );

	Promise.resolve().then( () => console.log( 'ST1 - promise' ) );
}, 900 );

setTimeout( () => {
	console.log( 'ST2' );
}, 900 );

const now = Date.now();

while( Date.now() - now < 1000 );

console.log( 'start' );
