


function arrayLength(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    console.log("length===>",fruits.length)
}

//arrayLength()


function converttoString(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    console.log("fruit===>",fruits)
    console.log("String===>",fruits.toString())
}

//converttoString()


function atMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
   

    for(let i=0; i<fruits.length;i++){
        console.log(fruits.at(i))
    }
}

//atMethod()


function joinMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    console.log("fruit===>",fruits)
    console.log("String===>",fruits.join(" "))
}

//joinMethod()




function pushandPopMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    fruits.push("banana")
    fruits.push("papaya")   // Last-IN

    fruits.pop()            // Last-Out


    console.log("Fruits====>",fruits)
   
}

//pushandPopMethod()






function shiftandUnshiftMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]

    fruits.unshift("Banana")
    fruits.unshift("mango")     // First - IN


    fruits.shift()             // First - OUT
    
    console.log("Fruits====>",fruits)
   
}

//shiftandUnshiftMethod()





function deletefunctionality(){
    let person = {
        firstName: "Saravanan",
        lastName:"Durai",
        work:"Tcs",
        location:"Chennai"
    }
    delete person.lastName;
    console.log("Person===>",person)
    
   
}

//deletefunctionality()








function concatFuncinality(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    let vegtables = ["Onion","Cabage","Potatoo","Bringal"]

    let carryBag = fruits.concat(vegtables)
    //let bag = [...fruits,...vegtables]

    carryBag[0] = "Mango"

    console.log("fruits===>",fruits)
    console.log("vegtables===>",vegtables)
    console.log("carryBag===>",carryBag)
   
}

//concatFuncinality()





function copyWithinMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    fruits.copyWithin(0,2)
    console.log("fruits===>",fruits)
}

//copyWithinMethod()



function sliceMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    let result = fruits.slice(1,2)

    console.log("result===>",result)
    console.log("fruits===>",fruits)
}

//sliceMethod()







function spliceMethod(){
    let fruits = ["apple","Orange","Grapes","pineapple"]
    fruits.splice(0,3,"Banana","kiwi","litchi")

   
    console.log("fruits===>",fruits)
    //console.log("result===>",result)
}

spliceMethod()











function additemLast(array,element){
    array.push(element)
    return array
}



function removeElementLast(array){
    array.pop()
    return array
}

function addNewElementFirst(array,element){
    array.unshift(element)
    return array
}

function removeFirstElement(array){
    array.shift()
    return array
}

function getLength(array) {
    return array.length
}
function convertString(array,removesplchar){
    return (removesplchar!=null && removesplchar!=undefined && removesplchar) ? array.join(' ') : array.toString()
}

const fruits = ["apple","orange","grapes","pineapple"]

function copyElements(array){
    
    return array.copyWithin(3,2)
}

function sliceExample(array){
    return array.slice(1,3)
}

function spliceExample(array){
    array.splice(1,2,"kiwi","mango","litchi")
    return array
}



// let result = spliceExample(fruits,"kiwi,lemeon")
// console.log("result======>",result)