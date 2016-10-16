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

  var cart = [];

  function addToCart(){
    var itemSpan  = document.getElementById("totalItems");
    var priceSpan = document.getElementById("totalPrices");
    var product   = getProduct(this.id);
    var total     = 0;
    var newObj    = {};
    newObj.qty    = 1;
    newObj.prod   = product;

    if(cart.length > 0){
      var indexOf = searchProduct(this.id);
      if(indexOf > -1){
        cart[indexOf].qty += 1;
      }
      else{
        cart.push(newObj);
      }
    }
    else{
      cart.push(newObj);
    }
    console.log(cart);
    var price           = document.createTextNode("$" + total);
    var item            = document.createTextNode(cart.length.toString());
    itemSpan.innerText  = item.textContent;
    priceSpan.innerText = price.textContent
  }

  //Return index of product in shopping cart. Return -1 if not found
  function searchProduct(id){
    var i   = 0;
    var len = cart.length;
    for(i; i < len; i++){
      if(id === cart[i].prod.id){
        return i;
      }
    }
    return -1;
  }

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

  var addButtons = document.querySelectorAll(".addButton");
  var i          = 0;
  for(i; i < addButtons.length; i++){
    addButtons[i].addEventListener("click", addToCart, false);
  }

})
();
