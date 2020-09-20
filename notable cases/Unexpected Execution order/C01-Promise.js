function doThrow( msg ) {
	throw new Error( msg );
}

function Manager() {}

Manager.prototype.storeString = function storeString( str, onCreate ) {
	return Promise.resolve()
		.then( () => ( this.str = str ) )
		.then( onCreate )
	;
};

Manager.prototype.validateString = function validateString( str ) {
	return str === this.str
		? console.log( 'Success!' )
		: doThrow( 'Different!' )
	;
};

var manager = new Manager();

var str = 'str';

manager.storeString( str )
	.then( function cb( storedStr ) {
		manager.validateString( str );
	} )
;
