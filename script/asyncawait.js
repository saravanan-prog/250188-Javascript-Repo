/* Example - 1 */


function promiseConcept(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=> reject("I am promise"),6000)
    })
}


async function displayMessage(){
    try{
        let data = await promiseConcept()
        console.log("data===>",data)
        console.log("I am display message")
    }
    catch(error){
        console.error("Error Message==>",error)
    }
}
    

//displayMessage()




/** Exampe 2  */

function productList() {
    let productavailable = true
    let product = ["apple","orange","grapes","Banana"]
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(productavailable)
                resolve(product)
            else
                reject("currently product is not available")
        },5000)
    })
}

async function displayProduct(){
    try{
        let product = await productList()
        console.log("Product List :::",product)
    }
    catch(error){
        throw error;
    }
   
}

//displayProduct()


/* Example - 3  */


function productList() {
    let productavailable = true
    let product = ["apple","orange","grapes","Banana"]
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(productavailable)
                resolve(product)
            else
                reject("currently product is not available")
        },5000)
    })
}

function offerChecking(){


    return Promise.reject("EveryProduct 5% offer")
}

async function displayProduct(){
    try{
        let product = await productList()
        let offerData =  await offerChecking()
        console.log("Product List :::",product,"offerData===>",offerData)
    }
    catch(error){
        throw error;
    }
   
}
displayProduct()