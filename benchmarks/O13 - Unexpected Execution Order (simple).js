/*function doThrow( msg ) {
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

manager.validateStr( str );*/

// ---------------------------------------

function doThrow( msg ) {
	throw new Error( msg );
}

var manager = new class Manager {
	create( str, onCreate ) {
		return new Promise( r => {
			setTimeout( () => {
				r( this.str = str );
			}, Math.random() * 1000 )
		} ).then( onCreate );
	}

	validateStr( str ) {
		return new Promise( r => {
			setTimeout( () => {
				r( str === this.str || doThrow( 'Different!' ) );
			}, Math.random() * 1000 )
		} )
			.then( () => console.log( 'Success!' ) );
	}
}

var str = 'str';

manager.create( str, str => {
//	manager.validateStr( str );
} );

manager.validateStr( str );