/**
 *     localStroage
 *     sessionStroge
 * 
 *     localStorage.setItem("key",JSON.stringfy(data))
 *     localStorage.getItem("key")
 *     localStorage.removeItem("key")
 */

let loginData = {
    username:"saravananTest@gmail.com",
    password:"Test@123"
}


function register(){
    localStorage.setItem("loginData",JSON.stringify(loginData))
}

register()


function dashboard(){
    let data = localStorage.getItem("loginData")
    console.log("data::::",data)
}

dashboard()






function logout(){
   localStorage.removeItem("loginData")

   dashboard()
}

logout()


/* Js - Redirection 

        href = "url"
        replace(url) - back button hidden
 */

function redirection(){
    window.location.replace( "../LoginForm.html")
}