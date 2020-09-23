

const p1 = Promise.resolve().then( v => console.log( 'p1.then 1' ) );

const p2 = Promise.resolve().then( v => console.log( 'p2.then 1' ));

queueMicrotask( () => console.log( 'queueMicrotask' ) );

const p3 = Promise.resolve().then( v => console.log( 'p3.then 1' ) );

let p4 = null;

const p5 = Promise.resolve();

p3
	.then( v => console.log( 'p3.then 2' ) )
	.then( v => {
		console.log( 'p3.then 3' );

		p4 = Promise.resolve()
			.then( v => console.log( 'p4.then 1 << p3.then 3' ) ) // Schedule to right before 'p3.then 4'
			.then( v => console.log( 'p4.then 2 << p3.then 3' ) ) // Schedule to right before 'p3.then 5'
		;

		const p7 = Promise.resolve()
			.then( v => {
				console.log( 'p7.then 1 << p3.then 3' ); // Schedule to right before 'p3.then 4', but after 'p4.then 1 << p3.then 3'

				queueMicrotask( () => console.log( 'queueMicrotask << p7.then 1 << p3.then 3' ) ); // Schedule to right before 'p7.then 2 << p3.then 3', after 'p4.then 2 << p3.then 3'
			} )
			.then( v => console.log( 'p7.then 2 << p3.then 3' ) ) // Schedule to right before 'p3.then 5', immediately after 'p4.then 2 << p3.then 3'
		;
	} )
	.then( () => console.log( 'p3.then 4' ) )
	.then( () => console.log( 'p3.then 5' ) )
;

p1
	.then( v => console.log( 'p1.then 2' ) )
	.then( v => {
		console.log( 'p1.then 3' );

		const p6 = Promise.resolve().then( v => console.log( 'p6.then 1 << p1.then 3' ) ); // Schedule to right before 'p1.then 4'

		queueMicrotask( () => console.log( 'queueMicrotask << p1.then 3' ) ); // Schedule to immediately after 'p6.then 1 << p1.then 3'

		p5.then( v => console.log( 'p5.then 1 << p1.then 3' ) ); // Schedule to immediately after 'queueMicrotask << p1.then 3'
	} )
	.then( v => console.log( 'p1.then 4' ) )
;

p2
	.then( v => {
		console.log( 'p2.then 2' );

		return new Promise( r => setTimeout( () => {
			console.log( 'setTimeout << p2.then 2' );

			r();
		}, 2000 ) );
	} )
	.then( v => console.log( 'then 3 - p2' ) )
;
