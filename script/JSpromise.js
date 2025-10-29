/**
 *   JS Promise State
 *      PENDING
 *      FULLFILLED
 *      REJECTED
 *
 *
 */

let name = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hii Saravanan");
  }, 2000);
});

//  name.then(
//       (data) => console.log("data===>",data)
//  )

let productName = new Promise((resolve, reject) => {
  let productAvailable = true;
  setTimeout(() => {
    if (productAvailable) resolve(["apple", "orange", "grapes"]);
    else reject("Currrently not available product");
  }, 2000);
});

// productName.then(
//     (data) => {
//         console.log("product===>",data)
//     }
// )
// .catch(
//     (error) => console.error(error)
// )
// .finally(
//     () => console.log("finally triggred")
// )

let offer = Promise.resolve("Flat 50% Avail");
//  offer.then((data)=> console.log("data===>",data))






/* problem - 1 */
function addition() {
  let a = 10;
  let b = 5;

  let result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 5000);
  });

  return result;
}

// addition()
//   .then((additonResult) => {
//     console.log("Additon Result===>", additonResult);

//   })

//   .catch((error) => console.log("error===>", error));





/* problem -2 */

function voterCheck(age) {
  let result = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) 
        resolve("Eligble");
      else
         reject("Not-Eligble");
    }, 8000);
  });
  return result;
}

function voterResult(result) {
  console.log("Your are ====>", result);
}

voterCheck(3).then(
    (result) => {
         voterResult(result)
    }
)
.catch((error)=> {
    console.log("Facing issue==>",error)
})





// voterCheck(3).then(
//     (successdata) => voterResult(successdata),
//     (failureData) => console.log(failureData)
// )

/* problem -3 */

function Product() {
  let product = ["apple", "orange", "mango"];
  let result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 8000);
  });
  return result;
}

function isOffer(product) {
  console.log("OFFER 50%===>", product);
}
function checkPromocode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === "Fruit100") resolve("valid");
      else reject("Not-valid");
    }, 8000);
  });
}
function Billing(promocodeStatus) {
  let price = 1000;
  let finalPrice = promocodeStatus == "valid" ? 100 : price;
  console.log("finalPrice", finalPrice);
}

// Product().then(
//     (data)=> {

//         isOffer(data)
//         checkPromocode('Fruit101').then(
//             (data)=> Billing(data),
//             (errordata) => Billing(errordata)

//         )
//     },
//     ()=>{}
// )
