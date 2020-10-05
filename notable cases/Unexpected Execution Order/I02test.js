// In test format
function Manager() {}

Manager.prototype.storeString = function storeString( str, onCreate ) {
	return new Promise( r => {
		setTimeout( () => {
			console.log( 'ST1' );

			r( this.str = str );
		}, Math.random() * 1000 );
	} ).then( onCreate );
};

Manager.prototype.validateString = function validateString( str ) {
	return new Promise( ( r, j ) => {
		setTimeout( () => {
			console.log( 'ST2' );

			if ( str === this.str ) {
				r( 'Success!' );
			} else { 
				j( 'Different!' );
			}
		}, Math.random() * 1000 );
	} )
		.then(
			function S( v ) {
				console.log( 'S', v );
			},
			function R( v ) {
				console.warn( 'R', v );

				throw v;
			}
		)
		.catch( function E( v ) {
			console.warn( 'E', v );
		} )
	;
};

var manager = new Manager();

var str = 'str';

manager.storeString( str );

manager.validateString( str );
