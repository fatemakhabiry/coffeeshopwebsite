let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
   
}
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let total =document.querySelector('.total');
let listCard =document.querySelector('.listCard');
let list =document.querySelector('.list');
let closeshopping =document.querySelector('.closeshopping');
let quantity =document.querySelector('.quantity');

closeshopping.addEventListener('click',()=>{
    cartItem.classList.remove('active');
})
let products =[
{
    id:1,
    name:'latte',
    image:'menu1.jpg',
    price:80,
},
{
    id:2,
    name:'turkish coffee',
    image:'menu2.jpg',
    price:80,
},
{
    id:3,
    name:'american coffe',
    image:'menu3.jpg',
    price:90,
},
{
    id:4,
    name:'espresso',
    image:'menu4.jpg',
    price:60,
},
{
    id:5,
    name:'mocha',
    image:'menu5.jpg',
    price:75,
},
{
    id:6,
    name:'machiato',
    image:'menu6.jpg',
    price:100,
},
];

let listCards =[];
function initApp(){
products.forEach((value,key)=>{
    let newDiv=document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML=`
      <img src="${value.image}">
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add to card</button>
    `;
    list.appendChild(newDiv);

})
}
initApp();
function addToCard(key){
if(listCards[key]==null){
    listCards[key]=products[key];
    listCards[key].quantity=1;
}
reloadCard();
}
function reloadCard(){
 
    listCard.innerHTML='';
    let count = 0;
    let totalprice =0;
    listCards.forEach((value,key)=>{
        totalprice =totalprice + value.price;
        count =count + value.quantity;

        if(value !=null){
            let newDiv =document.createElement('li');
    newDiv.innerHTML =`
      <div><img src="${value.image}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
      <button onclick="changeQuantity(${key},${value.quantity -1})">-</button>
      <div class="count">${value.quantity}</div>
      <button onclick="changeQuantity(${key},${value.quantity +1})">+</button>
      </div>
    
    `;
             listCard.appendChild(newDiv);
        }
    })
    total.innerText =totalprice.toLocaleString();
    quantity.innerText =count;
}
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }
    
    else{
        listCards[key].quantity=quantity;
        listCards[key].price=quantity*products[key].price;
    }
    reloadCard();
}
