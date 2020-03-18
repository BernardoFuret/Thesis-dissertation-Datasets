/**
 * > Promise rejection handled asynchronously (microtask)
 *
 * A rejection reaction is registered through scheduling for
 * a microtask. Since microtasks are executed in the same iteration,
 * the rejection is contained. 
 */
const p1 = new Promise( ( resolve, reject ) => {
	reject( 1 );
} );

const ago = Date.now();

while ( Date.now() - ago < 2000 );

Promise.resolve().then( () => p1.catch( v => console.warn( 'promise:', v ) ) );

queueMicrotask( () => p1.catch( v => console.warn( 'queueMicrotask:', v ) ) );

process.nextTick( () => p1.catch( v => console.warn( 'nextTick:', v ) ) );