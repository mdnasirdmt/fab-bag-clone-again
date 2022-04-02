function oneMonth(){
    document.querySelector("#price").innerHTML = "Rs. 599.00"
}
function threeMonth(){
    document.querySelector("#price").innerHTML="Rs. 1,599.00"
}



var counter = localStorage.getItem("counter");
document.querySelector("#text").innerText = counter;
document.querySelector(".plus").addEventListener("click",addfunction)
function addfunction(){
    counter++;
    localStorage.setItem("counter",counter)
    document.querySelector("#text").innerText = counter;
}


    document.querySelector(".minus").addEventListener("click",minusfunction)
    function minusfunction(){
    if(counter>1){
        counter--;
        localStorage.setItem("counter",counter)

        document.querySelector("#text").innerText = counter;
        }
    
    }


