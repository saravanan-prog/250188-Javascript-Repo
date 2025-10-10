/**
 *   while loop     - Entry control loop
 *   do-while loop  - Exit control loop
 *   for loop       - initialization; testconditon; increment/decrement
 *   for-in loop    - returns to keys
 *   for-of loop    - returns to values
 */



function whileLoopExample  () {
   
        let i = 1 

        console.log("looping start")

        while(i <= 15){      // 3 < 15          
            console.log("i===>",i)             // 1 2 3 ...... 15
            i++;  // i+1
        }

        console.log("looping end")
    
    
    
}
// whileLoopExample()

 function whileLoopwithArray(){

    let vegtable = ["onion","potatoo","cabage"]
    let item = 0;
    console.log("length checking===>",vegtable.length)
    while(item < vegtable.length){
      
        console.log(vegtable[item])
        item++;
    }

 }
 
 // whileLoopwithArray()
 












function dowhileLoopExample  () {
    let i = 1
    do {
        console.log("do-while==>",i)
        i++;
    }
    while(i<=15)

} 

 //dowhileLoopExample() 












function forLoopExample ()  {

    for(let i=1; i<=25; i++){

        //console.log(i, " * 5 = ",  i*5)

        console.log(`${i} * 5 = ${i*5}`)

    }

}
//forLoopExample()


function readFruits  ()  {

    let fruits = ['apple','Orange','grapes',"pineapple"]

    for(let i=0; i< fruits.length; i++){
        console.log('execute:::',fruits[i])
    }
}

//readFruits()


function forInExample ()  {
    let fruits = ['apple','Orange','grapes',"pineapple"]
    for(let i in fruits) {
        console.log("for-in-item====>",fruits[i])
    }
}

//forInExample()



function forOfExample ()  {
    let fruits = ['apple','Orange','grapes',"pineapple"]
    for(let item of fruits) {
        console.log("for-of-item====>",item)
    }
}

//forOfExample()




