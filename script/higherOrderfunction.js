/**
 * HOF - Higher order function
 *     - a function takes an argument one function it is returns to new values is called hof.
 * 
 * HOF types
 *     array itterations functions
 *          forEach - it is simple itteration method doest return anything.
 *          map     - A map is process to itterate existing array to return new array.
 *          filter  - A filter is process to itterate existing array to return new array with test conditon 
 *          reduce - it returns to compute the array single value 
 *          some   - it is returns true or false [it match any one conditon]
 *          every  - it is check every elements
 */




const forEachExample = () => {

  let fruits = ['apple','Orange','grapes']

  let tastedFruits = []

   /* forEach - it is simple itteration method doest return anything.  */
    fruits.forEach((value,index,arr)=>{
       
       (value=="apple") && tastedFruits.push(value )  
    })

   console.log("tastedFruits===>",tastedFruits)


  
}

//forEachExample()




const mapExample = () => {

   let candidateNames = ["saravanan","karthik","Rajesh","Kamal","karpagam","Rithika"]

   /*  Map  - A map is process to itterate existing array to return a new array. */

   const newArray = candidateNames.map((value,index,arr)=>{

        return (
                value.toLowerCase() != "rithika" &&
                value.toLowerCase() != "karpagam"
            
               ) ? 'Mr.' + value.toUpperCase() 
               : 'Miss.' + value.toUpperCase()
   })
  
   console.log("newArray====>",newArray)
   
}

//mapExample()


const newPriceList = () => {
    const price = [100,200,500,600,50]

   let newPrice = price.map((values)=>{
        return values * 2;
    })

    return newPrice
}


let newPricelist = newPriceList() 






const filterExample = () => {

   let fruits = ['apple','Orange','grapes']


   /***          
    * 
    * filter  - A filter is process to itterate existing array to return a new array with test conditon  
    * 
    * 
    * */
    
   const newArray = fruits.filter((value,index,arr)=>{

        return value === 'apple' || value ==='grapes'

   })

   console.log("newArray====>",newArray)



}

//filterExample()







/*  Remove Duplicate Elements  */


function removeDuplicate(){
    let numbers = [100,100,500,500,500,600,600,800]

    let uniqueArray = numbers.filter((value,index,arr)=>{

        return arr.indexOf(value) !== index
    })

    console.log("numbers====>",numbers)
    console.log("uniqueArray====>",uniqueArray)


  
}

//removeDuplicate()












/* Find duplicate elements in array  */

function findingRepeatedValues(){
     let numbers = [100,100,500,500,500,600,600,800]
    let repeatedValues = numbers.filter(
       (values,index,arr)=>{
           return arr.indexOf(values) != index 
           
       }
    )
     
    return {
        originalArray: numbers,
        duplicatedElements : repeatedValues
    }
}

//console.log(findingRepeatedValues())








const reduceExample = () => {
   let numbers = [100,100,500,500,500,600,600,800]

    /**
     * A Reduce function is an one of the higher order function 
        it is array compressed return to single value
    */




    const total = numbers.reduce((acc,value,index,arr)=>{
            return acc + value
    },10)


    console.log("total====>",total)


    
   
}

//reduceExample()





const someExample = () => {

    const candidateNames = ["saravanan","karthik","Udhaya"]
    /**
     *  some()   - it is returns true or false [it match any one conditon]
     */

   let someReturns = candidateNames.every((values,index,arr)=>{
        return values == 'Udhaya'
    })

    
    console.log("someReturns=====>",someReturns)
}

//someExample()




function oddevenchecking(){
    
    let number = [20,45,83,98,78,47,64]

    let result = number.some((value)=>{
        return value %2 == 0
    })

    console.log("result===>",result)
}

oddevenchecking();




















const everExample = () => {

  const candidateNames = ["Udhaya","Udhaya","Saravanan"]
   let  everyReturns = candidateNames.every((values,index,arr)=>{
        return values == 'Udhaya'
    })

    return everyReturns
}


 // console.log("Everyresult=========>",everExample())