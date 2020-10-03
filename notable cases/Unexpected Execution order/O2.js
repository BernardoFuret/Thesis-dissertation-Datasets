/**
 * The object received by the outer `setTimeout` will be evaluated by the
 * outer `setTimeout`, but before the scheduling done by it, thus calling
 * the inner `setTimeout` at that time, which will schedule the operation
 * on the inner `setTimeout`.
 * When the evaluation is done, the outer `setTimeout` will schedule the
 * evaluated string.
 *
 * Based on: https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html
 */
setTimeout( { // Node.js doesn't support anything other than callbacks as the first parameter.
	toString() {
		setTimeout( console.log, 100, 'ONE' );

		return "console.log( 'TWO' )";
		// NOTE: The above line may throw an error if sites forbid it via the
		// policy-directive `unsafe-eval` on the Content-Security-Policy header.
	}
}, 100 );
