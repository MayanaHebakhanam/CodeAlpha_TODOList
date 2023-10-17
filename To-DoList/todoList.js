const inputBox=document.getElementById("input-txt");
const listContainer=document.getElementById("list-container");


function addTask(){
    if(inputBox.value == ''){
        alert("Please enter your task name");
    }
    else{
        let li=document.createElement("li");
        listContainer.appendChild(li);

        const inputTxt=document.createElement("input");
        inputTxt.type="text";
        inputTxt.classList.add('text');
        inputTxt.value=inputBox.value;
        inputTxt.setAttribute('readonly','readonly');
        li.appendChild(inputTxt);

        let icon=document.createElement("i");
        icon.classList.add('glyphicon');
        icon.classList.add('glyphicon-edit');
        icon.classList.add('edit');
        li.appendChild(icon);

        icon.addEventListener('click',(e)=>{
            if(icon.classList.contains("edit")){
                icon.classList.remove("edit");
                icon.classList.remove("glyphicon-edit");
                icon.classList.add("glyphicon-save");
                icon.classList.add("save");
                inputTxt.removeAttribute("readonly");
                inputTxt.focus();
                }
            else{
                icon.classList.remove("save");
                icon.classList.add("edit");
                icon.classList.remove("glyphicon-save");
                icon.classList.add("glyphicon-edit");
                inputTxt.setAttribute("readonly","readonly");
            }

        }, false);

        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("Saved_Data",listContainer.innerHTML);

}

function showData(){
    listContainer.innerHTML=localStorage.getItem("Saved_Data");
    
}

showData();
