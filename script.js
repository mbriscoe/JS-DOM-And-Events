//create references to html elements
const addToListBtn = document.querySelector('#addToListButton');
const listTextInput = document.querySelector('#listTextInput');
const myList = document.querySelector('#myList');
const title = document.querySelector('h1');

title.style.backgroundColor = 'blue';
title.style.color = 'white';

addToListBtn.addEventListener('click', addToList);

function addToList() {
    // check if there's text in the box
    if (listTextInput.value) {
        // if there is add it to the list
        const newListElement = document.createElement('li');
        newListElement.textContent = listTextInput.value;

        //add an event listener to remove the item when clicked
        newListElement.addEventListener('click', removeFromList);

        // clear the box
        listTextInput.value = '';

        // update the list
        myList.appendChild(newListElement);

        // focus back on text box
        listTextInput.focus();
    }
}

// remove an item from the list
function removeFromList(e) {
    if (confirm('Are you sure you want to remove this item?')) {
        const listElement = e.target;
        listElement.parentNode.removeChild(listElement);
        // focus back on text box
        listTextInput.focus();
    }
}
