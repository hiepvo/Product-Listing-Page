/**
 * Created by hiepvo on 10/16/16.
 */
(function(){

  /*** Create Product Objects ****/
  var products = [
    {
      id: 'prod1',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "1.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

    },
    {
      id: 'prod2',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "2.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

    },
    {
      id: 'prod3',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "3.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod4',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "4.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod5',
      name: 'Product Name',
      image: 'http://placehold.it/200x210',
      price: "5.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod6',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "6.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod7',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "7.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod8',
      name: 'Product Name',
      image: 'http://placehold.it/200x210',
      price: "8.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod9',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "9.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod10',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "10.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod11',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "11.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 'prod12',
      name: 'Product Name',
      largeImage: 'http://placehold.it/200x210',
      smallImage: 'http://placehold.it/140x100',
      price: "12.99",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ];

  var cart  = [];
  var total = 0.0;

  function addToCart(){
    var itemSpan = document.getElementById("totalItems");
    var product  = getProduct(this.id);
    var newObj   = {};
    newObj.qty   = 1;
    newObj.prod  = product;
    if(cart.length > 0){
      var indexOf = searchProductInCart(this.id);
      if(indexOf > -1){
        cart[indexOf].qty += 1;
        cart[indexOf].prod.price = cart[indexOf].qty * cart[indexOf].prod.price;
      }
      else{
        cart.push(newObj);
      }
    }
    else{
      cart.push(newObj);
    }
    var item           = document.createTextNode(cart.length.toString());
    itemSpan.innerText = item.textContent;
  }

  //Return index of product in shopping cart. Return -1 if not found
  function searchProductInCart(id){
    var i   = 0;
    var len = cart.length;
    for(i; i < len; i++){
      if(id === cart[i].prod.id){
        return i;
      }
    }
    return -1;
  }

  //return product by product id
  function getProduct(prodId){
    var result = "";
    var i      = 0;
    for(i; i < products.length; i++){
      if(products[i].id === prodId){
        result = products[i]
      }
    }
    return result;
  }

  function createCart(){
    var strCart  = "";
    var loader   = document.getElementById('cartLoader');
    var cartMsg  = document.getElementById('cartMsg');
    var checkout = document.querySelector('.checkout-wrapper')
    var paypal   = document.querySelector('.paypal-image');

    var i   = 0;
    var len = cart.length;
    if(len > 0){
      checkout.style.display = 'block';
      paypal.style.display   = 'block';
      cartMsg.style.display  = 'none';
      for(i; i < len; i++){
        strCart += '<div class = "item">';
        strCart += '<div class = "buttons">';
        strCart += '<span id="del_' + cart[i].prod.id + '" class = "delete-btn"></span>';
        strCart += '</div>';
        strCart += '<div class = "image">';
        strCart += '<img src = "http://placehold.it/140x100" alt = ""/>';
        strCart += '</div>';
        strCart += '<div class = "description">';
        strCart += '<span>' + cart[i].prod.desc + '</span>';
        strCart += '</div>';
        strCart += '<div class = "quantity">';
        strCart += '<button id="plus_' + cart[i].prod.id + '" class = "plus-btn" type = "button" name = "button">';
        strCart += '<img src = "images/plus.svg" alt = ""/>';
        strCart += '</button>';
        strCart += '<input id="qty_' + cart[i].prod.id + '" type = "text" name = "quantity" value = "' + cart[i].qty + '">';
        strCart += '<button id="minus_' + cart[i].prod.id + '" class = "minus-btn" type = "button" name = "button">';
        strCart += '<img src = "images/minus.svg" alt = ""/>';
        strCart += '</button>';
        strCart += '</div>';
        strCart += '<div id="price_' + cart[i].prod.id + '" class = "checkout-price">$' + cart[i].prod.price + '</div>';
        strCart += '</div>';
        loader.innerHTML = strCart;
        updateTotal();
      }

    }
    else{
      loader.innerHTML       = '';
      cartMsg.style.display  = 'block';
      checkout.style.display = 'none';
      paypal.style.display   = 'none';
    }
  }

  function updateTotal(){
    var total = document.querySelector('.total-price');
    var val   = 0;
    var i     = 0;
    var len   = cart.length;
    if(len > 0){
      for(i; i < len; i++){
        val += cart[i].prod.price * cart[i].qty;
      }
    }
    var text        = document.createTextNode('' + val.toFixed(2));
    total.innerText = text.textContent;
  }

  function addEventUpdateCartBtn(){
    var adds    = document.querySelectorAll('.plus-btn');
    var minuses = document.querySelectorAll('.minus-btn');
    var del     = document.querySelectorAll('.delete-btn');
    var i       = 0;
    var len     = adds.length;
    for(i; i < len; i++){
      adds[i].addEventListener('click', updateCart);
      minuses[i].addEventListener('click', updateCart);
      del[i].addEventListener('click', removeItemFromCart);
      del[i].delpara = del[i].id;
    }
  }

  function removeItemFromCart(prodId){
    var totalItems = document.getElementById('totalItems');
    cart.splice(searchProductInCart(prodId), 1);
    totalItems.innerText = cart.length;
    createCart();
    addEventUpdateCartBtn();
  }

  function updateCart(){
    var prodId   = this.id.substr(this.id.indexOf('_') + 1);
    var product  = getProduct(prodId);
    var type     = this.id.substr(0, this.id.indexOf('_'));
    var qtyId    = 'qty_' + prodId;
    var priceId  = 'price_' + prodId;
    var inputQty = document.getElementById(qtyId);
    var price    = document.getElementById(priceId);
    var indexOf  = searchProductInCart(prodId);
    if(type === 'plus'){
      inputQty.value  = parseInt(inputQty.value) + 1;
      var addVal      = inputQty.value * (parseFloat(product.price));
      price.innerText = '$' + addVal.toFixed(2).toString();
    }
    else if(type === 'minus'){
      inputQty.value = parseInt(inputQty.value) - 1;
      if(inputQty.value === '0'){
        removeItemFromCart(prodId);
      }
      else{
        var minusVal    = inputQty.value * (parseFloat(product.price));
        price.innerText = '$' + minusVal.toFixed(2).toString();
      }
    }
    cart[indexOf].qty = inputQty.value;
    updateTotal();
  }

  var addButtons = document.querySelectorAll(".addButton");
  for(var i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener("click", addToCart, false);
  }

  /****** toggle cart *******/
  var mainNav   = document.querySelector('.shopping-cart');
  var navToggle = document.querySelector('.shopping-cart-btn');
  mainNav.classList.add('collapsed');
  function mainNavToggle(){
    mainNav.classList.toggle('collapsed');
    createCart();
    addEventUpdateCartBtn();
  }

  navToggle.addEventListener('click', mainNavToggle);

})
();
