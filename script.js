// SET UP VARIABLES
const addToListBtn = document.querySelector("#addToListButton");
const listTextInput = document.querySelector("#listTextInput");
const myList = document.querySelector("#myList");
const title = document.querySelector("h1");

title.style.backgroundColor = "blue";
title.style.color = "white";

// ADD EVENT LISTENER
addToListBtn.addEventListener("click", addToList);

function addToList(){
    // check if there's text in the text box
    if(listTextInput.value){

        // update the list
        const newListElement = document.createElement("li");
        newListElement.textContent = listTextInput.value;
        newListElement.addEventListener("click", removeFromList) 
        myList.appendChild(newListElement);

        // clear the text from the text box
        listTextInput.value = '';

        // set focus to text box
        listTextInput.focus();
    }    
}

function removeFromList(e){
    if(confirm("Are you sure?")){
    const listElement = e.target;
    listElement.parentNode.removeChild(listElement);
    // listElement.style.textDecoration = "line-through";
    listElement.style.color = "red";
    listTextInput.focus()
    }
}