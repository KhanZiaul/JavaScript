// optional chaining'

const person = {

    name:'abul',

    age : 26,

    cars:{

        bike:{

            firstCollections:['hero','pulser']

        },

        cars:{

            firstCollections:['RRR','rickshaw']
        }

    }
}

console.log(person?.cars?.cars?.firstCollections[1]) // here ? means optional chaining to check either defined or undefined