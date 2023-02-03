// split , slice , substr , substring , concate , join

// split --------------->

const song = "this is.split string"

console.log(song.split(' '));

console.log(song.split(''));

console.log(song.split('.'));

// slice , substr , substring---------------------->

const biodata = 'there i s no biodata';

console.log(biodata.slice(3,5));

console.log(biodata.substr(3,7));

console.log(biodata.substring(3,5));

// join ----------------------->

const songs = ['This is what', 'this is this'];

console.log(songs.join('.'));

// concate ---------------------->

const firstName = 'what';

const lastName = 'is?';

console.log(firstName+ ' ' +lastName);