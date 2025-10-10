function printingObject(){

     let person = {
        name : "saravanan",
        age  : 25,
        work : "Software Engineer",
        city : "chennai"
    }

    


    
    /* Read Method - 1 */
     console.log("------------Method - 1-----------------")

    console.log("Person Name::",person.name)
    console.log("Person Age:::",person.age)
    console.log("Person work::",person.work)
    console.log("Person city::",person.city)

    console.log("------------Method - 2-----------------")
    console.log("Person Name::",person['name'])
    console.log("Person Age:::",person['age'])
    console.log("Person work::",person['work'])
    console.log("Person city::",person['city'])

    console.log("----------Read Keys ------------")

    


}

//printingObject()


function multiObjectHandling(){

    var person = [
        {
            name : "saravanan",
            age  : 25,
            work : "Software Engineer",
            city : "chennai"
        },
        {
            name : "sarath kumar",
            age  : 22,
            work : "Software Tester",
            city : "Banglore"
        },
        {
            name : "Roshan kumar",
            age  : 22,
            work : "BDA-engineer",
            city : "Mumbai"
        }
    ]


    console.log("Person Name::",person[1].name)
    console.log("Person Age:::",person[1].age)
    console.log("Person work::",person[1].work)
    console.log("Person city::",person[1].city)
}

//multiObjectHandling()


function multiObjectHandlingwithLoop(){


    var person = [
        {
            name : "saravanan",
            age  : 25,
            work : "Software Engineer",
            city : "chennai",
            experiece:[
                {
                    year:2000,
                    company:"TCS"
                },
                {
                    year:2001,
                    company:"CTS"
                },
                {
                    year:2002,
                    company:"wipro"
                }
            ]
            
        },
        {
            name : "sarath kumar",
            age  : 22,
            work : "Software Tester",
            city : "Banglore",
             experiece:[
                {
                    year:2002,
                    company:"Relvantz"
                },
                {
                    year:2003,
                    company:"Techmahindara"
                },
                {
                    year:2004,
                    company:"Avaanz"
                }
            ]
        },
        {
            name : "Roshan kumar",
            age  : 22,
            work : "BDA-engineer",
            city : "Mumbai",
             experiece:[
                {
                    year:2005,
                    company:"css corp"
                },
                {
                    year:2001,
                    company:"kisflow"
                },
                {
                    year:2002,
                    company:"freshwork"
                }
            ]
        }
    ]


    for(let i = 0; i<person.length; i++){
        console.log("Person Name::",person[i].name)
        console.log("Person Age:::",person[i].age)
        console.log("Person work::",person[i].work)
        console.log("Person city::",person[i].city)
        console.log("Person Experice::",)


        for(let j=0; j<person[i].experiece.length; j++){
            console.log("Year:",person[i].experiece[j].year)
            console.log("Company:",person[i].experiece[j].company)
        }








        console.log("----------------------------")
    }
    

   
}

//multiObjectHandlingwithLoop()


function enhancedLoopExample(){
    var person = [
        {
            name : "saravanan",
            age  : 25,
            work : "Software Engineer",
            city : "chennai",
            experiece:[
                {
                    year:2000,
                    company:"TCS"
                },
                {
                    year:2001,
                    company:"CTS"
                },
                {
                    year:2002,
                    company:"wipro"
                }
            ]
            
        },
        {
            name : "sarath kumar",
            age  : 22,
            work : "Software Tester",
            city : "Banglore",
             experiece:[
                {
                    year:2002,
                    company:"Relvantz"
                },
                {
                    year:2003,
                    company:"Techmahindara"
                },
                {
                    year:2004,
                    company:"Avaanz"
                }
            ]
        },
        {
            name : "Roshan kumar",
            age  : 22,
            work : "BDA-engineer",
            city : "Mumbai",
             experiece:[
                {
                    year:2005,
                    company:"css corp"
                },
                {
                    year:2001,
                    company:"kisflow"
                },
                {
                    year:2002,
                    company:"freshwork"
                }
            ]
        }
    ]


     for(let item in person){
        console.log("Person Name::",person[item].name)
        console.log("Person Age:::",person[item].age)
        console.log("Person work::",person[item].work)
        console.log("Person city::",person[item].city)
          console.log("Person Experience:")
        for(let experienceDetails of person[item].experiece){
           // console.log("Year:::", experienceDetails.year + "-" + experienceDetails.company)

            console.log(`Year : ${experienceDetails.year} - ${experienceDetails.company}`)
        }
    }


}

//enhancedLoopExample()


function objectKeysandvaluesHandling(){

    
     let person = {
        name : "saravanan",
        age  : 25,
        work : "Software Engineer",
        city : "chennai"
    }

    let keys = Object.keys(person)
    let values = Object.values(person)

    document.getElementById('table').innerHTML = `
        <thead>
            <tr>
                <th> ${keys[0]} </th>
                <th> ${keys[1]} </th>
                <th> ${keys[2]} </th>
                <th> ${keys[3]} </th>
            </tr>
        </thead>

        <tbody>
             <tr>
                <td> ${values[0]} </td>
                <td> ${values[1]} </td>
                <td> ${values[2]} </td>
                <td> ${values[3]} </td>
            </tr>

        </tbody>
    
    `

    console.log("Keys=====>",keys)
    console.log("values=====>",values)

}



function typeConversation(){


    let person = {
        name : "saravanan",
        age  : 25,
        work : "Software Engineer",
        city : "chennai"
    }

    let converttoString = JSON.stringify(person)

    // console.log(typeof person)
    // console.log(typeof converttoString)



    let employe = `

            {
               "empid":"4211",
               "empname": "raja",
               "emplocation":"chennai",
               "empsalary":"50000"
            }
    
    
    
    `;

    let stringtoObject = JSON.parse(employe)

    console.log(typeof employe)
    console.log(typeof stringtoObject)
    


}


typeConversation()