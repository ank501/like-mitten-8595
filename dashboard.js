document.querySelector("#mysurvey").addEventListener("click",function(){
    window.location.href="surveypage.html"
  })
  document.querySelector("#plannav").addEventListener("click",function(){
    window.location.href="plan.html"
  })
  document.querySelector("#dashboard").addEventListener("click",function(){
    window.location.href="dashboard.html"
  })
  
  document.querySelector("#signoutbutton").addEventListener("click",function(){
    window.location.href="index.html"
  })

  let y = JSON.parse(localStorage.getItem("user-data"))
  console.log(y)

  document.querySelector("#user-email").innerText =y[0].email
  document.querySelector("#user-email-p").innerText =y[0].email
