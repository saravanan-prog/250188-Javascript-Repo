/* <p id="first-text">Hello Javascript</p> */

    var element = document.getElementById("first-text");
    var elementIntext = document.getElementById("first-text").innerText;
    var inShortaccess = element.innerText;

    console.log("element====>", element);
    console.log("elementIntext====>", elementIntext);
    console.log("inShortaccess====>", inShortaccess);



/* <p id="result"></p> */

    var resultElement = document.getElementById("result");
    resultElement.innerText = "<span style='color:white;background-color:red'> This is Result tag Container </span>";
    resultElement.innerHTML =
    "<span style='color:white;background-color:red'> This is Result tag Container </span>";


/**
 *      username :  <input type="text" id="username">
 *      password : <input type="text" id="password" >
 */

    var username = document.getElementById("username")
    var password = document.getElementById("password")

    username.value = "saravanan@tcs.com"
    password.value= "test@123"
