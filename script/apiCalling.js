async function apicallChecking() {
  let url = `http://localhost:8083/api/v1/staff/getAllStaffList`;
  let option = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  };
  let response = await fetch(url, option);
  let responseData = await response.json();

  console.log("responseData====>", responseData);
}

//apicallChecking()





async function productList() {
  let url = "https://fakestoreapi.com/products";

  let option = {
    method: "get",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  };

  let response = await fetch(url, option);
  let responseData = await response.json();

  console.log("Product List ===>", responseData);
}

//productList()



async function getSingleProduct() {
  let productId = 2;
  let endpointURI = `https://fakestoreapi.com/products/${productId}`;
  let opiton = getOption(null);

  console.log("option===>", opiton);

  let response = await fetch(endpointURI, opiton);
  let responseData = await response.json();

  console.log("responseData====>", responseData);
}

//getSingleProduct()









async function addNewProduct() {

  let url = "https://fakestoreapi.com/products";
  
  let payload = {
    title: "T-shirt",
    price: 100,
    description: "Levin tshirt it is comfortable for men's",
    category: "Causal-fits",
    image: "http://example.com",
  };

    let options = {
        method: "post",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify(payload),
    };

  let response = await fetch(url, options);
  let responseData = await response.json();

  console.log("Response Data ====>", responseData);
}

//addNewProduct()

async function register() {
  let endpointURI = `https://reqres.in/api/register`;
  let payload = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };
  let opiton = getOption(payload);
  let response = await fetch(endpointURI, opiton);
  let responseData = await response.json();

  console.log("Resigister Response Data ::::", responseData);
}

//register();

async function login() {
  let endpointURI = "https://reqres.in/api/login";

  let payload = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  let options = getOption(payload);

  let response = await fetch(endpointURI, options);
  let responseData = await response.json();

  console.log("responseData===>", responseData);
}

login()

function getOption(payload) {
  let options = {};
  if (payload != null) {
    options = {
      method: "post",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify(payload),
    };
  } else {
    options = {
      method: "get",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    };
  }

  return options;
}
