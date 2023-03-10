// objects method inside method

const student = {

    name:'khan zia',
    
    examiner:function(){

        return this.name;
    },

    improvement:function(subject){

        const studentName = this.examiner();

        return studentName + ` will attend in improvement exam in ${subject}`;
    }
}

const info = student.improvement('physics');

console.log(info);