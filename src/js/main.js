document.querySelector("#navbar-container").innerHTML = `
  <nav class="navbar">
    <div class="nav-container">

      <a href="/" class="nav-logo">
        <i class="fas fa-code logo-icon"></i>
        CodeShop
      </a>

      <ul class="nav-menu">
        <li class="nav-item"><a href="/" class="nav-link active">Home</a></li>
        <li class="nav-item"><a href="/cart" class="nav-link cart-icon">Cart <span class="cart-count">0</span></a></li>
      

        <div class="search-container">
          <input autocomplete='off' id='search_product' type="text" class="search-input" placeholder="Search...">
          <button class="search-btn"><i class="fas fa-search"></i></button>
        </div>
      </ul>

      <button class="hamburger">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>
`

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


const cart_count = document.querySelector('.cart-count')
var cart = JSON.parse(localStorage.getItem('cartshop')) || []



function rendercart() {
    if(cart.length>0){
        cart_count.innerHTML =  cart.length
    }
}
rendercart()