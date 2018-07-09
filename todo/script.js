const addItem = document.querySelector('.add-item');
const submitBtn = document.querySelector('.submitBtn');
const groceryListTable = document.querySelector('.grocery-list__table');
const clearBtn = document.querySelector('.clearBtn');

//EVENT LISTENTERS

// add item
submitBtn.addEventListener('click', function (e) {
 e.preventDefault();
 let value = addItem.value;
 if (value !== '') {
  addElement(value);
  storeItem(value);
 }
 else {
  alert('please write a list item before submitting')
 }

})
// remove item 
groceryListTable.addEventListener('click', function (e) {
 if (e.target.parentElement.classList.contains('remove-item')) {
  e.target.parentElement.parentElement.remove();
 }
})

//remove list 
clearBtn.addEventListener('click', function () {
 if (confirm('The items will be deleted from local storage as well.Wish to proceed?')) {
  //localStorage.clear()
  localStorage.removeItem('grocery_list');
  while (groceryListTable.firstChild) {
   groceryListTable.removeChild(groceryListTable.firstChild);
  }
 }
})

//populate list once dom is loaded


document.addEventListener("DOMContentLoaded", function (event) {
 createUI();
});




//functions 
//add element




function addElement(value) {
 // parent
 let parent = document.createElement('div');
 parent.className = 'grocery-item';
 // title
 let title = document.createElement('h2');
 title.className = 'grocery-item__title';
 title.appendChild(document.createTextNode(value))
 //link
 let link = document.createElement('a');
 link.className = 'remove-item';
 link.innerHTML = `<i class="fas fa-trash-alt"></i>`;
 // add children
 parent.appendChild(title);
 parent.appendChild(link);
 groceryListTable.appendChild(parent);
 addItem.value = '';
}

//store item

function storeItem(value) {
 localStorage.setItem('item', 'hello')

 let groceryItems = localStorage.getItem('grocery_list') ? JSON.parse(localStorage.getItem('grocery_list')) : [];

 groceryItems.push(value)
 localStorage.setItem('grocery_list', JSON.stringify(groceryItems))

}
//create from Storage
function createUI() {
 let storedGroceryItems = JSON.parse(localStorage.getItem('grocery_list'));
 console.log(typeof storedGroceryItems);
 if (storedGroceryItems !== null) {
  // storedGroceryItems.forEach(element => {
  //  addElement(element);
  // });
  for (let i = 0; i < storedGroceryItems.length; i++) {
   addElement(storedGroceryItems[i]);
  }
 }
}