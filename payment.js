    
    document.querySelector("#confirm").addEventListener("click" , function(){
        let name = document.querySelector("#name").value;
    let num = document.querySelector("#cardnumber").value;
    let cvv = document.querySelector("#cvv").value;

      console.log(name)
      if(name == "Ankit singh" && num == "1234" && cvv == "123") {
        document.querySelector("#message").innerText = "Payment Successfull ! "
        setTimeout(function(){
           window.location.href="surveypage.html"
        } ,1000)
       
      }  else{
        document.querySelector("#message").innerText = "Wrong Credentials"
      }
      
    });

    document.querySelector("#dashboard").addEventListener("click",function(){
    window.location.href="dashboard.html"
    })
    document.querySelector("#plannav").addEventListener("click",function(){
        window.location.href="plan.html"
    })
    document.querySelector("#upgrade").addEventListener("click",function(){
        window.location.href="plan.html"
    })
    document.querySelector("#signoutbutton").addEventListener("click",function(){
        window.location.href="index.html"
    })
