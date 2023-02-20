const friends = (friends) =>{

    let friendeven = [];
    
    for(let i = 0; i < friends.length ; i++ ){

        if(friends[i].length % 2 !== 0){

            friendeven.push(friends[i]);
        }
    }

    return friendeven;
} 

const friendNameInEven = friends(['zia' , 'megha' , 'sebu']);

console.log(friendNameInEven);