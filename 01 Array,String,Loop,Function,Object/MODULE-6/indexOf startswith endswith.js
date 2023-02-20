// indexOf , startswith and endswith

//indexOf------------------->

const song = "sada sada kala kala";

if (song.indexOf('kala kala') !== -1){
    console.log('it is valid');
}

else{
    console.log('it is not valid');
}

// startswith -------------------->

const story = 'this is nothing';

console.log(story.startsWith('this'));

// endswith --------------------->

const filename = 'file.pdf';

console.log(filename.endsWith('.pdf'));