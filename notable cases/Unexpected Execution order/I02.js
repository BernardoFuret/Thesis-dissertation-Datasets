function Manager() {}

Manager.prototype.storeString = function( str, onCreate ) {
	return new Promise( r => {
		setTimeout( () => {
			r( this.str = str );
		}, Math.random() * 1000 );
	} ).then( onCreate );
};

Manager.prototype.validateString = function( str ) {
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			if ( str === this.str ) {
				resolve( 'Success!' )
			} else { 
				reject( 'Different!' );
			}
		}, Math.random() * 1000 );
	} )
		.then( console.log )
		.catch( console.warn )
	;
};

var manager = new Manager();

var str = 'str';

manager.storeString( str );

manager.validateString( str );