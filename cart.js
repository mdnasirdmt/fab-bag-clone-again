var todoItems = JSON.parse(localStorage.getItem("todoData"));
var completed = JSON.parse(localStorage.getItem("completed"))||[];
todoItems.map(function(elem){
    var tr = document.createElement("tr")   
    
    var td1 = document.createElement("td")
    td1.innerHTML = elem.name;
    var td2 = document.createElement("td")
    td2.innerHTML = elem.quantity;
    var td3 = document.createElement("td")
    td3.innerHTML = elem.priority;
    var td4 = document.createElement("td")
    td4.textContent = "complete"
        td4.style.color = "red";
        td4.style.cursor = "pointer"
        td4.addEventListener("click",function(){
            completedFunction(elem);
        })
    tr.append(td1,td2,td3,td4);
    document.querySelector("#body").append(tr)
})
function completedFunction(elem){
    completed.push(elem);
    localStorage.setItem("completed",JSON.stringify(completed))
}