document.querySelector("form").addEventListener("submit",myfunctin)

var createArr = JSON.parse(localStorage.getItem("createdetails")) || []
function myfunctin(){
    event.preventDefault()
    var  obj={
        fname:document.querySelector("#fname").value,
        lname:document.querySelector("#lname").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }
    createArr.push(obj)
    localStorage.setItem("createdetails",JSON.stringify(createArr))
    window.location.href="signin.html"
    // console.log(createArr)
}
