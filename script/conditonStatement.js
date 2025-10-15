/***  CONDITONAL STATEMENTS
 * 
 *      if - statement
 *      if -else -statement
 *      Nested If -statement
 *      Else-if lader -statement
 *      switch statement
 */

function LearingIFStatement(){
     let age = 18
     
     
     console.log("Start")


     if(age >= 18){
         console.log("Elgible")
     }

     console.log("end")
}

//LearingIFStatement()


function LearingIFElseStatement(){
     let name = "Saravanan"
     
     
     console.log("Start")


     if(name == "saravanan"){
         console.log("Yes he is saravanan")
     }
     else{
        console.log("I think he is not saravanan")
     }

     console.log("end")
}

//LearingIFElseStatement()






function nestedIfStatement(){
    let name = "laxshmi";
    let age = 20;
    let degree = "MCA"
    let work = "TCS"
    let location = "chennai"


    if(name == "laxshmi"){
        if(age == 20){
            if(degree == "B.tech"){
                 if(work=="accenture"){
                    if(location=="chennai")
                        console.log("ELIGIBLE PERSON")
                }
                else{
                    console.log("Company manditory work with TCS")
                }
            }
            else{
                console.log("Degree error MCA")
            }
               
                    
        }
        else{
            console.log("age must have 25")
        }
            
        
    }
    else{
        console.log("NOT-ELIGBLE")
    }

}

//nestedIfStatement()







function elseIfLaderStatment(){
    let mark = 72;

    if(mark == 100)
        console.log("Excellent score")
    else if(mark > 90 )
        console.log("First Class with distiction")
    else if(mark > 80)
        console.log("First Class")
    else if(mark > 70)
        console.log("Second Class")
    else if(mark > 60)
        console.log("Thrid class")
    else if(mark > 50)
        console.log("PASS")
    else 
        console.log("FAIL")

}
//elseIfLaderStatment()




function switchStatement(){

    let day = "monday"

    switch(day){
        case "sunday":
            console.log("this is holiday");
            break;
        
        case "monday":
            console.log("This is for work start day")
            break;
        
        case "tuesday":
            console.log("work sart to second day")
        
        default:
            console.log("This is not a day")

        
    }



}

switchStatement()





