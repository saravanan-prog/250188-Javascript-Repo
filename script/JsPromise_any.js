let promise1 = new Promise((resolve,reject)=> {

      setTimeout(()=>{
          resolve("Promise1 method")
      },5000)

})

let promise2 = new Promise((resolve,reject)=> {
      let isReject = false
      setTimeout(()=>{
          if(isReject)
            reject("rejected promise2 based on flag")
          else
            resolve("Promise2 method")
      },4000)

})

let promise3 = new Promise((resolve,reject)=> {

      setTimeout(()=>{
          resolve("Promise3 method")
      },6000)

})



Promise.any([promise1,promise2,promise3])
      .then(
        
         (data) => {
            console.log("Promise all Example")
            console.log("data====>",data)
         }
      )
      .catch(
          (error) => console.error("Promise Reject error")
      )