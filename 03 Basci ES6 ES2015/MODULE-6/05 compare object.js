// compare objects

const obj1 = {a: 1, b: 2};
const obj2 = {b: 2, a: 1};

function compareObj(first,second){

    const firstKeys = Object.keys(first);

    const secondKeys = Object.keys(second);

    if(firstKeys.length === secondKeys.length){

        for(const key of firstKeys){

            if(first[key] !== second[key]){

                return false;
            }
        }

        return true;
    }
}

const isSame = compareObj(obj1,obj2);

console.log(isSame);