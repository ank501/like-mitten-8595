//   Signup functionalities

document.querySelector("button").addEventListener("click",addUser)
let user = JSON.parse(localStorage.getItem("user-data")) || [] ;
function addUser(){

let email = document.querySelector("#email").value;
let pass = document.querySelector("#password").value;

let obj = {email , pass}

if(email == "" || pass ==""){
  alert("Fill All Data")
}else{
  user.push(obj)
localStorage.setItem("user-data" , JSON.stringify(user))
setTimeout(function(){
  window.location.href="login.html"

},1000)

}
}
















    // footer js 

  document.querySelector("#imgdiv>div").addEventListener("click",function(){
    window.location.href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1668083161&rver=7.0.6738.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253A%252F%252Faccount.microsoft.com%252F%253Frefp%253Dsignedout-index%2526refd%253Din.search.yahoo.com&lc=1033&id=292666&lw=1&fl=easi2"
  })
  document.querySelector("#imgdiv>div+div").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/"
  })
  document.querySelector("#imgdiv>div+div+div").addEventListener("click",function(){
    window.location.href="https://www.linkedin.com/"
  })
  document.querySelector("#imgdiv>div+div+div+div").addEventListener("click",function(){
    window.location.href="https://www.google.com/"
  })
  document.querySelector("#imgdiv>div+div+div+div+div").addEventListener("click",function(){
    window.location.href="https://secure2.store.apple.com/in/shop/signIn?ssi=1AAABhGGE_0kgMHQb4XFTdIV_0DkZ3oIrxTr8-Xtsm-kib2hSqW6HFH8AAAA0aHR0cHM6Ly93d3cuYXBwbGUuY29tL2luL3xodHRwczovL3d3dy5hcHBsZS5jb20vaW4vfAACAYzR6rGLaChVY9Lew6hxfE-cGThSLUz3x8CHnKt7GRaE"
  })

