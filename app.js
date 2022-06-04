




// firebase.database().ref('').on("child_added",function(data){
  
  // })

 
   

// var addItemId = 0
// function addToCart(item){
//   addItemId += 1
//   var selectedItem = document.createElement('div')
//   selectedItem.classList.add('dartImg')
//   selectedItem.setAttribute('id',addItemId)
//   var img = document.createElement('img')
//   img.setAttribute('src',item.children[0].currentSrc)
//   selectedItem.append(img);
//   var cartItems=document.getElementById('title') 
//   cartItems.append(selectedItem)
//   console.log(img);

// }
    
    
// CART 

let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.carto')
let closecart = document.querySelector('#close-cart')

// opens cart 
cartIcon.onclick =  () => {
  cart.classList.add("active");
}

// remove cart 
closecart.onclick =  () => {
  cart.classList.remove("active");
}

// cart making js 

if (document.readyState == "loading"){
  document.addEventListener('DOMContentLoaded', ready)
}
else{
  ready();
}

// Making function 

function ready(){
  // remove items from cart 
  var removecartbutn = document.getElementsByClassName('cart-remove')
  console.log(removecartbutn);

  for(var i = 0; i < removecartbutn.length; i++){
    var button = removecartbutn[i]
    button.addEventListener('click', removeCartItem)
  } 

  // quantity changes
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for(var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  // Add to cart  
  var addCart = document.getElementsByClassName('add-carts')
  for(var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click', addCartClicked) 
  }
  // Buy button work 
  document
  .getElementsByClassName("btn-buy")[0]
  .addEventListener('click', buybuttonclicked)

  
}

// Buy button 
function buybuttonclicked(){
  alert("your order is placed");
  var cartContent = document.getElementsByClassName('cart-content')[0]
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild)
  }
  updatetotal()
}

// Remove itms from cart 
function removeCartItem(event){
  var buttonclick = event.target; 
  buttonclick.parentNode.remove();
  updatetotal();
} 

//Quantity change
function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updatetotal()
}

// Add to cart
function addCartClicked(event){
  var button = event.target
  var shopProducts = button.parentNode
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText
  var price = shopProducts.getElementsByClassName("price-title")[0].innerText
  var productImg = shopProducts.getElementsByClassName("proImg")[0].src;
  addProductToCart(title, price, productImg); 
  updatetotal();
}


function addProductToCart(title,price,productImg){
  var cartShopBox = document.createElement('div') 
  cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('card-product-title')

  for(var i = 0; i < cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
      alert('you have already this to cart')
      return;
    }
  }
  
  var cartboxContent = `
             <img src="${productImg}" alt="" class="cart-img">
             <div class="detail-box">
             <div class="card-product-title">${title}</div>
             <div class="cart-price">${price}</div>
             <input type="number" value="1" class="cart-quantity">
             </div>
             <!-- Remove Cart  -->
             <i class="cart-remove  bi bi-dash-circle" ></i>`;
             
             cartShopBox.innerHTML = cartboxContent;
             cartItems.append(cartShopBox)
             cartShopBox
             .getElementsByClassName('cart-remove')[0]
             .addEventListener('click', removeCartItem)
             cartShopBox
             .getElementsByClassName('cart-quantity')[0]
             .addEventListener('change', quantityChanged)
             
            }
             
             
             // Update total 
             
function updatetotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0]
  var cartBoxes = cartContent.getElementsByClassName('cart-box')
  var total = 0

  for(var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0]
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace("Rs", ""))
    var quantity = quantityElement.value
    total = total + (price * quantity);

  }
    // if price contain same value 
    total = Math.round(total * 100) / 100; 

    document.getElementsByClassName('total-price')[0].innerText = "Rs" + total;



}