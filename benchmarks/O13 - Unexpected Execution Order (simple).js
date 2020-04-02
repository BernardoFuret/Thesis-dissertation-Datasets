function doThrow( msg ) {
	throw new Error( msg );
}

var manager = new class Manager {
	create( str, onCreate ) {
		return Promise.resolve()
			.then( () => ( this.str = str ) )
			.then( onCreate )
		;
	}

	validateStr( str ) {
		return str === this.str
			? console.log( 'Success!' )
			: doThrow( 'Different!' )
		;
	}
}

var str = 'str';

manager.create( str, str => {
//	manager.validateStr( str );
} );

manager.validateStr( str );
