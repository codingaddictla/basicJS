//item elements
const itemContainer = document.querySelector('.main');

//nav elements
const jellyBtn = document.querySelector('.jelly__btn');
const glazingBtn = document.querySelector('.glazing__btn');
const chocBtn = document.querySelector('.choc__btn');
const allBtn = document.querySelector('.all__btn');
// cart
const shoppingCart = document.querySelector('.shoppingCart');
const cart = document.querySelector('.cart');
const cartMain = document.querySelector('.cart__main')


//EVENT LISTENERS


//cart
shoppingCart.addEventListener('click', function (e) {
 e.preventDefault()

 const cart = document.querySelector('.cart');
 cart.classList.toggle('cart__show')
})
itemContainer.addEventListener('click', function (e) {
 e.preventDefault()
 if (e.target.hasAttribute('data-id')) {
  let value = storeItems[e.target.getAttribute('data-id')];
  console.log(value);
  let storageCart;
  if (localStorage.getItem('shopping_list') === null) {


   storageCart = []
  }
  else {
   storageCart = JSON.parse(localStorage.getItem('shopping_list'))
  }
  storageCart.push(value);
  localStorage.setItem('shopping_list', JSON.stringify(storageCart))
  createCartUI();
 };
})
// filter

function filterStore(btn, filter) {

 btn.addEventListener('click', function (event) {
  event.preventDefault();
  while (itemContainer.firstChild) {
   itemContainer.removeChild(itemContainer.firstChild);
  }
  let filterItems = storeItems.filter(function (element) {
   return element.name === filter;
  })
  displayItems(filterItems);
 })
}
// filter store
filterStore(jellyBtn, 'jelly');
filterStore(glazingBtn, 'glazing');
filterStore(chocBtn, 'chocolate');

//show all items

allBtn.addEventListener('click', function (event) {
 event.preventDefault();
 while (itemContainer.firstChild) {
  itemContainer.removeChild(itemContainer.firstChild);
 }

 displayItems(storeItems);
})


//addItems('food', 20, './img/item-1.jpeg');

// for (let i = 0; i < storeItems.length; i++) {
//  createItem(storeItems[i].name, storeItems[i].price, storeItems[i].img)
// }
// storeItems.forEach((element) => createItem(element.name, element.price, element.img))

//
document.addEventListener('DOMContentLoaded', () => {
 addAllItems()
 displayItems(storeItems);
 createCartUI()
})



//create an array for all items
const storeItems = [];


//function to add items
function addItems(name, price, img, id) {

 let item = {
  name: name,
  price: price,
  img: img,
  id: id
 }
 storeItems.push(item);

}


console.log(storeItems);

function createItem(title, price, img, id) {
 //create article
 let parent = document.createElement('article');
 parent.classList.add('item')

 //create img 
 let itemImg = document.createElement('img');
 itemImg.classList.add('item__img');
 itemImg.src = img;
 //create item text
 let itemText = document.createElement('div');
 itemText.classList.add('item__text');


 //create title
 let itemTitle = document.createElement('h1');
 itemTitle.classList.add('item__title');
 itemTitle.appendChild(document.createTextNode(title))
 //create price
 let itemPrice = document.createElement('h3');
 itemPrice.classList.add('item__price');
 itemPrice.appendChild(document.createTextNode(price));
 //span
 let dollar = document.createElement('span');
 dollar.classList.add('item__dollar')
 dollar.appendChild(document.createTextNode('$'))

 itemPrice.appendChild(dollar)
 //create link
 let cartBtn = document.createElement('a');
 cartBtn.classList.add('cartBtn', 'btn');
 cartBtn.setAttribute('data-id', id)

 cartBtn.appendChild(document.createTextNode('add to cart'));

 itemText.appendChild(itemTitle);
 itemText.appendChild(itemPrice);
 itemText.appendChild(cartBtn);

 parent.appendChild(itemImg);
 parent.appendChild(itemText);
 itemContainer.appendChild(parent);


}
//add all items

function addAllItems() {
 addItems('jelly', 20, './img/item-1.jpeg', 0);
 addItems('jelly', 20, './img/item-2.jpeg', 1);
 addItems('jelly', 20, './img/item-3.jpeg', 2);
 addItems('glazing', 10, './img/item-4.jpeg', 3);
 addItems('glazing', 10, './img/item-5.jpeg', 4);
 addItems('glazing', 10, './img/item-6.jpeg', 5);
 addItems('chocolate', 15, './img/item-7.jpeg', 6);
 addItems('chocolate', 15, './img/item-8.jpeg', 7);
 addItems('chocolate', 15, './img/item-9.jpeg', 8);
}

function displayItems(list) {
 list.forEach((element) => createItem(element.name, element.price, element.img, element.id))
 // for (let i = 0; i < list.length; i++) {
 //  createItem(list[i].name, list[i].price, list[i].img)
 // }
 // list.forEach((element) => createItem(element.name, element.price, element.img))
}
//display cart
function displayCart(name) {
 let parent = document.createElement('h3');
 parent.classList.add('cart__item')
 parent.appendChild(document.createTextNode(name));
 cartMain.appendChild(parent)
}

//create from Storage
function createCartUI() {

 while (cartMain.firstChild) {
  cartMain.removeChild(cartMain.firstChild);
 }
 let storedItems = JSON.parse(localStorage.getItem('shopping_list'));
 console.log(storedItems);

 if (storedItems !== null) {
  // storedGroceryItems.forEach(element => {
  //  addElement(element);
  // });
  for (let i = 0; i < storedItems.length; i++) {
   console.log();

   displayCart(storedItems[i].name);
  }
 }
}


localStorage.clear()











