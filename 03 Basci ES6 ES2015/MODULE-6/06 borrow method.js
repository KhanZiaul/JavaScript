// borrow method from one object to another object

const kodomAli = {

    name:'kodom',

    money: 5000,

    treatDay : function(money,tips){

        this.money = this.money - money - tips;

        return this.money;
    }
}

// const remaining = kodomAli.treatDay(1000,50);

// console.log(remaining);

const badamAli = {

    name:'badam',

    money: 7000,
}

const remaining = kodomAli.treatDay.call(badamAli,1000,500);

console.log(remaining);