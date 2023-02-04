// reverse string names, which string length value maximum


function friends(name1 , name2){

    if(name1.length > name2.length){

        let nameInReverse = "";

        for(let i = name1.length-1 ; i >= 0; i--){

            nameInReverse = nameInReverse + name1[i];
        }

        console.log(nameInReverse);
    }
    else if(name2.length > name1.length){

        let nameInReverse = "";

        for(let i = name2.length-1 ; i >= 0; i--){

            nameInReverse = nameInReverse + name2[i];
        }

        console.log(nameInReverse);
    }
}

friends('zia', 'megha');

//console.log(reverseNameIs);