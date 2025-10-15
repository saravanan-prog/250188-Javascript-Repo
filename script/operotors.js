function Arithmetic(){
   
    let a = 10
    let b = 5

    let additonResult = a + b;
    let subractionResult = a - b;
    let multiplicationResult = a * b;
    let divisionResult = a / b;
    let modofResult = a % b;

    let result = {
        "additonResult" : additonResult,
        "subractionResult" : subractionResult,
        "multiplicationResult" : multiplicationResult,
        "divisionResult" : divisionResult,
        "modofResult":modofResult
    }


    return result

     

}
let arithmetiResult = Arithmetic()

// console.log("AdditonResult ==>",arithmetiResult.additonResult)
// console.log("SubractionResult ==>",arithmetiResult.subractionResult)
// console.log("Arithmetic Result is = " + JSON.stringify(arithmetiResult) )



function Assignment(){

    /*assignment  =  +=, -=,*=,/=,%= */

    let a = 10 
    let b = 5 
    let c = a;

    /*additon assignment */
   
    a += 50;  /*  a = a + 50  */
    b -=  10  /* b = b - 10  */

    let result = {
        "avalue" : a,
        "bvalue" : b
    }


    return result
}

// let assignmentResult = Assignment()
// console.log("assignment ===>",assignmentResult)


function ComparisonOperator(){
    /*  Comparison Operators - (==,===,!=, !==, <,>,<=,>=)  */
    let firstNumber = 10
    let secondNumber = "5"

    let doubleEqulatoResult = (firstNumber == secondNumber)
    let trippleEqualtoResult = (firstNumber === secondNumber)
    let notEqualCheck = (firstNumber != secondNumber)

    let result = {
        "compareValue" : doubleEqulatoResult,
        "compareValueType":trippleEqualtoResult,
        "notEqualcheck" : notEqualCheck
    }

    

    return result
}
// let ComparisonOperatorResult =  ComparisonOperator()
// console.log("ComparisonOperatorResult =>",ComparisonOperatorResult)


function StringOpertor(){
    let a = "10"
    let b = "10"

    //return Number(a) + Number(b) 
    return a + b
}

// let StrintoperatorResult = StringOpertor()
// console.log(StrintoperatorResult)




function logicalOperator(){
    /* (&&) - Logical And (||) - Logical OR  */

    let firstName = "saravanan"
    let secondName = "saravanan"

    let mark1 = 50
    let mark2 = 45

    let logincalandResult = ( (firstName == secondName) && (mark1 == mark2))   // when two condition match return true otherwise false
    let logicalOrResult =   ( (firstName == secondName) || (mark1 == mark2) )  // any one conditon match it is return true

    let result = {
        "logicalandResult" : logincalandResult,
        "logicalOrResult" : logicalOrResult
    }

    return result
}

// let logicalOperatorResult = logicalOperator()
// console.log("logicalOperatorResult====>",logicalOperatorResult)





function uninaryOperator(){
    /**
     *   Pre increment (++i)
     *   Pre decrement (--i)
     *   Post increment (i++)
     *   Post decrement (i--)
     */

    let i = 1
    console.log("i====>",i++)
    console.log("i====>",++i)
    console.log("i====>",i++)
    console.log("i====>",--i)



}

 //uninaryOperator()









function ternaryOperator() {
  let firstName = "saravanan";
  let lastName = "saravanan";

  let ternaryResult = firstName == lastName ? "Equal value" : "Not equal";

  let mark1 = 45;
  let mark2 = 50;

  let condition2 =
   ( firstName == lastName) && (mark1 == mark2) ? "Matched" : "Not-matched";

  let condtion3 =
    (firstName == lastName)
      ? "Names are equal"
      : (mark1 == mark2)
      ? "marks equal"
      : "Not-Equal both conditon";

  return condtion3;
}

// let ternaryResult = ternaryOperator();
// console.log("ternaryResult ====>", ternaryResult);








function SpreadOperator(){
    // [...] -> Spread operator

    let vegtable = ["onion","potatoo","cabage"]

    //shallow copy
    let carryBag = vegtable  
    carryBag[0] = "Tomatoo"

    //Deep Copy
    let box = [...vegtable]
    box[0] = "Bringal"

    
    console.log("vegtable====>",vegtable)
    console.log("carryBag===>",carryBag)
    console.log("Box====>",box)

    

}


  SpreadOperator()

