function doThrow( msg ) {
	throw new Error( msg );
}

function Manager() {}

Manager.prototype.storeString = function( str, onCreate ) {
	return Promise.resolve()
		.then( () => ( this.str = str ) )
		.then( onCreate )
	;
};

Manager.prototype.validateString = function( str ) {
	return str === this.str
		? console.log( 'Success!' )
		: doThrow( 'Different!' )
	;
};

var manager = new Manager();

var str = 'str';

manager.storeString( str, str => {
	manager.validateString( str );
} );
