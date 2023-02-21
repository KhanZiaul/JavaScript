// class (syntatic sugar)

class Instructor{

    name;
    designation = 'web course Instructor'
    team = 'web team'

    startSupportSession(time){
        console.log(`start supportSession at ${time}`);
    }

    location;

    constructor(name,location){

        this.name = name;

        this.location = location;
    }
}

const khanZia = new Instructor('Khan Zia','Barishal');

console.log(khanZia);

khanZia.startSupportSession('9.00 PM');