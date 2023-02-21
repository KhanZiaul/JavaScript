// Javascript extend class

class Information{

    name;

    location;

    constructor(name,location){

        this.name = name;

        this.location = location;
    }

    feedback(){

        console.group(`${this.name}, thanks for your feedback`);
    }
};

class Developer extends Information{

    job = 'developer';
    
    constructor(name,location){

        super(name,location);
    }

};

class supporter extends Information{

    job = 'supporter';

    constructor(name,location){

        super(name,location);
    }

};

const megha = new Developer('Megha','Mohammadpur');

console.log(megha);

const location = megha.location;

console.log(location);

megha.feedback();