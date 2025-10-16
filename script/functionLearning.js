function basicLog(){
    console.log("basic Log function")
}

//basicLog();

/* ES6 - Arrow function */
const arrowBasicLog = () => console.log("I am a arrow function")

//arrowBasicLog()




function greetings(){
    let data = "Welcome to Saravanan"
    return data
}

// let greetingsResult = greetings();
// console.log("greetingsResult===>",greetingsResult)




/* ES6 - Arrow function */
const greetingsarrowFunction = () => data = "welcome to saravanan"

// let greetingsarrowFunctionResult = greetingsarrowFunction()
// console.log("greetingsarrowFunction===>",greetingsarrowFunctionResult)


 

function additon(a,b){
    return a + b
}

// let additonResult = additon(50,50)
// console.log("additionResult ===>",additonResult)

function subraction(a,b,c){
    return (a + b) - c
}

// let subractionResult = subraction(50,50,10)
// console.log("subractionResult ===>",subractionResult)


function multiplication(a,b,...rest){

    console.log("a===>",a)
    console.log("b===>",b)
    console.log("rest==>",...rest)

    let result = 2

    for(let item of rest){
        result *= item
    }

    console.log("result==>",result)
}

// multiplication(10,50,60,70,80,90)



/* ES6 -  Parmeter Arrow function */

const arrowAdditon = (a,b) => a + b

// let arrowAdditonResult = arrowAdditon(5,10)
// console.log("arrowAdditonResult===>",arrowAdditonResult)





const arrowMultiplication = (...rest) => {
    let result = 2

    for(let i of rest)
        result *= i

    return result
}

// let arrowMultiplicationResult = arrowMultiplication(10,10)
// console.log("arrowMultiplicationResult===>",arrowMultiplicationResult)



/* ananyms function */

const blockA = function(){
    console.log("I am A function")
}
//blockA()

const blockB = () => console.log("I am B Function")
//blockB()




const welcomeMsg = function(){
    return "hello Saravanan"
}

// let welcomeMsgResult = welcomeMsg()
// console.log("welcomeMsgResult====>",welcomeMsgResult)


const subract = function(a,b){
    return a - b
}

// let subractResult = subract(15,10)
// console.log("subraction Result===>",subractResult)







/* Es6 - Arrow function */

const arrowWelcome = () => "welcome Arrow"


const readValueA = (a) => a
// let readValueresultA = readValueA(10)
// console.log("readValueresult==>",readValueresultA)

const readValueB = b => b
// let readValueresultB = readValueB(10)
// console.log("readValueresult==>",readValueresultB)


const sumofAdd  = (a,b) => a + b
const sumofMul  =(a,b) => a * b

const sumofcalculation = (a,b) => {
    let c = a + b
    let z = 500
    return c * z 
}





function getFullName(){

    let person = {
        firstName : "saravanan",
        lastName : "Durai",
        streetName: "2nd cross st",
        location : "chennai",
        /* Function Closure */
        fullName : () => {
            return person.firstName +" " +  person.lastName
        },
        address : () => person.streetName + ' ' + person.location


    }

    console.log(person.fullName())
    console.log(person.address())

}

getFullName()









