function doThrow( msg ) {
	throw new Error( msg );
}

function Manager() {}

Manager.prototype.storeString = function( str, onCreate ) {
	return new Promise( r => {
		setTimeout( () => {
			r( this.str = str );
		}, Math.random() * 1000 );
	} ).then( onCreate );
};

Manager.prototype.validateString = function( str ) {
	return new Promise( r => {
		setTimeout( () => {
			r( str === this.str || doThrow( 'Different!' ) );
		}, Math.random() * 1000 );
	} )
		.then( () => console.log( 'Success!' ) )
		.catch( console.warn )
	;
};

var manager = new Manager();

var str = 'str';

manager.storeString( str );

manager.validateString( str );
