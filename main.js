/**
 * Created by hiepvo on 10/16/16.
 */
(function(){
  var mainNav = document.querySelector('.shopping-cart');
  var navToggle = document.getElementById('cart-total');

// Start by adding the class "collapse" to the mainNav
  mainNav.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
  function mainNavToggle() {
    mainNav.classList.toggle('collapsed');
  }
  navToggle.addEventListener('click', mainNavToggle);
})();
