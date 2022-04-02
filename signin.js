document.querySelector("form").addEventListener("submit",myfin)

// console.log(deatai)

function myfin(){
    event.preventDefault()
    var details = JSON.parse(localStorage.getItem("createdetails"))||[];
    var email = document.querySelector("#ema").value
    var pass = document.querySelector("#pass").value
   
    details.map(function (elem){
          if(elem.email == email && elem.password == pass){
            alert("login success")
            window.location.href="index.html"
          }
          else{
              console.log("incorrect")
          }
    })

    // console.log(email,pass)
}