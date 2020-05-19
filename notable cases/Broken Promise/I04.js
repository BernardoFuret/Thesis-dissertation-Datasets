/**
 * The `then` method, if not receiving a function as
 * the second argument, so it defaults to a function that
 * throws the received error. In this case, it's what
 * happens. Since no `catch` is chained to that new Promise,
 * the error propagates to the top level. The `catch` presented
 * in the next line will never be reached through this chain;
 * It will be in a new chain, having the same starting Promise
 * as the first chain. Hence, a broken Promise case, where
 * the developer may have expected the `catch` to collect the error.
 */
const p1 = new Promise( ( resolve, reject ) => {
	reject( 1 );
} );

p1.then( console.log );

p1.catch( console.warn );