const p1 = Promise.resolve().then( v => console.log( 'p1.then1' ) );
const p2 = Promise.resolve().then( v => console.log( 'p2.then1' ) );
const p3 = Promise.resolve().then( v => console.log( 'p3.then1' ) );

const p33 = p3.then( v => console.log( 'p3.then2' ) ).then( v => console.log( 'p3.then3' ) );
const p22 = p2.then( v => console.log( 'p2.then2' ) ).then( v => console.log( 'p2.then3' ) );
const p11 = p1.then( v => console.log( 'p1.then2' ) ).then( v => console.log( 'p1.then3' ) );

p2.then( v => console.log( 'p2.then2 (forked)' ) ).then( v => console.log( 'p2.then3 (forked)' ) );
p1.then( v => console.log( 'p1.then2 (forked)' ) ).then( v => console.log( 'p1.then3 (forked)' ) );
p3.then( v => console.log( 'p3.then2 (forked)' ) ).then( v => console.log( 'p3.then3 (forked)' ) );

p22.then( v => console.log( 'p2.then4 (p22)' ) );
p11.then( v => console.log( 'p1.then4 (p11)' ) );
p33.then( v => console.log( 'p3.then4 (p33)' ) );
