const Allproducts = [
    {
        id: 0,
        name: "Dumbbell Set",
        desc: "Adjustable dumbbells for indoor strength training.",
        price: 1499,
        img: "https://images.unsplash.com/photo-1592588253470-9eb67341e66e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fitness"
    },
    {
        id: 1,
        name: "Wireless Earbuds",
        desc: "High-quality Bluetooth earbuds with noise cancellation.",
        price: 1999,
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        desc: "Fitness tracking smartwatch with heart-rate and sleep monitor.",
        price: 3499,
        img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Gaming Mouse",
        desc: "RGB gaming mouse with high precision sensor.",
        price: 1499,
        img: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics"
    },
    {
        id: 4,
        name: "Leather Wallet",
        desc: "Premium leather wallet with 8 card slots.",
        price: 799,
        img: "https://images.unsplash.com/photo-1620109176813-e91290f6c795?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fashion"
    },
    {
        id: 5,
        name: "Running Shoes",
        desc: "Lightweight and durable running shoes for daily use.",
        price: 2599,
        img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fashion"
    },
    {
        id: 6,
        name: "Hoodie Jacket",
        desc: "Warm and comfortable hoodie with soft cotton fabric.",
        price: 1199,
        img: "https://images.unsplash.com/photo-1606903073578-7ca9ea9946c0?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fashion"
    },
    {
        id: 7,
        name: "Office Chair",
        desc: "Ergonomic chair with adjustable height and lumbar support.",
        price: 4999,
        img: "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Furniture"
    },
    {
        id: 8,
        name: "Laptop Stand",
        desc: "Aluminium stand to improve laptop airflow and posture.",
        price: 899,
        img: "https://images.unsplash.com/photo-1629317480826-910f729d1709?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Accessories"
    },
    {
        id: 9,
        name: "Backpack",
        desc: "Spacious waterproof backpack with multiple compartments.",
        price: 1299,
        img: "https://images.unsplash.com/photo-1575844264771-892081089af5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fashion"
    },
    {
        id: 10,
        name: "Sunglasses",
        desc: "UV-protected stylish sunglasses for men and women.",
        price: 699,
        img: "https://images.unsplash.com/photo-1653038282366-09ae0df227be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fashion"
    },
    {
        id: 11,
        name: "Portable Speaker",
        desc: "Loud and deep bass portable Bluetooth speaker.",
        price: 1799,
        img: "https://images.unsplash.com/photo-1675319245480-215961c129f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics"
    },
    {
        id: 12,
        name: "Mechanical Keyboard",
        desc: "RGB mechanical keyboard with blue switches.",
        price: 2499,
        img: "https://images.unsplash.com/photo-1749149661368-400dc927f295?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics"
    },
    {
        id: 13,
        name: "Study Lamp",
        desc: "LED study lamp with adjustable brightness.",
        price: 499,
        img: "https://images.unsplash.com/photo-1760530675794-b065f6320d7b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Home"
    },
    {
        id: 14,
        name: "Water Bottle",
        desc: "Insulated stainless steel water bottle (1L).",
        price: 399,
        img: "https://images.unsplash.com/photo-1682637107214-8b95c081faf8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Home"
    },
    {
        id: 15,
        name: "Phone Case",
        desc: "Shockproof silicone phone case with matte finish.",
        price: 299,
        img: "https://images.unsplash.com/photo-1593055454503-531d165c2ed8?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Accessories"
    },
    {
        id: 16,
        name: "Desk Plant",
        desc: "Artificial table plant to elevate workspace vibes.",
        price: 349,
        img: "https://images.unsplash.com/photo-1557337996-6785a501a815?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Home"
    },
    {
        id: 17,
        name: "Travel Mug",
        desc: "Double-layer thermal travel mug, keeps drinks hot/cold.",
        price: 599,
        img: "https://images.unsplash.com/photo-1588793076577-4c2b666452d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Home"
    },
    {
        id: 18,
        name: "LED Strip Light",
        desc: "Color-changing LED strip for room decoration.",
        price: 999,
        img: "https://images.unsplash.com/photo-1582573195763-626b9ca0a316?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Electronics"
    },
    {
        id: 19,
        name: "Yoga Mat",
        desc: "Thick non-slip yoga mat for home workouts.",
        price: 899,
        img: "https://images.unsplash.com/photo-1637157216470-d92cd2edb2e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fitness"
    },

];


const allproducts = document.querySelector('.products-grid')

let rencluster = ''
let retproducts

const filterbtn = document.querySelector('.filter-buttons')
const onebtn = document.querySelectorAll('.filter-btn')
const allbtn = document.querySelector('.allporductbtn')

const search_product = document.querySelector('#search_product')
const active_search = document.querySelector('.active_search')
var cart = JSON.parse(localStorage.getItem('cartshop')) || []

search_product.addEventListener('focus', function () {
    let searching = search_product.value.toLowerCase()
    if (search_product.value.trim() != '') {
        retproducts = Allproducts.filter((e) => {
            return e.name.toLowerCase().startsWith(searching)
        })
        renderdata(retproducts)
    }
})


// search_product.addEventListener('blur', function () {
//     renderdata(Allproducts)

// })


search_product.addEventListener('input', function () {
    onebtn.forEach(function (elem) {
        elem.classList.remove('active')
    })
    allbtn.classList.add('active')

    let searching = search_product.value.toLowerCase()
    if (search_product.value.trim() != '') {
        retproducts = Allproducts.filter((e) => {
            return e.name.toLowerCase().startsWith(searching)
        })
        renderdata(retproducts)
    } else {
        renderdata(Allproducts)
    }
})


function Productfilter(query) {
    const filterproduct = Allproducts.filter((e) => {
        if (query == 'all') return e
        else {
            return e.category == query
        }
    })
    renderdata(filterproduct)
}



function renderdata(product) {
    rencluster = ''
    product?.forEach(function (elem, index) {
        rencluster += `
    <div key='${index}' class="product-card">
        <img src="${elem.img}" class="card-image">
        <div class="card-content">
          <span class="card-category">${elem.category}</span>
          <h3 class="card-title">${elem.name}</h3>
          <p class="card-description">${elem.desc}</p>
          <div class="card-price">₹${elem.price}</div>
          <div class="card-actions">
            <button data-index='${index}' class="add add-to-cart"><i data-index='${index}' class="add fas fa-shopping-cart"></i> Add to Cart</button>
          </div>
        </div>
      </div>`
    })

    allproducts.innerHTML = rencluster
}

renderdata(Allproducts);



const productcard = document.querySelector('.products-grid')
const flashmsg = document.querySelector('.flashmsg')
let interval
productcard.addEventListener('click', function (e) {
    if (e.target.classList.contains('add')) {
        let productindex = e.target.dataset.index
        let filtercart = cart.some(function (elm) {
            return elm.id == productindex
        })
        if (!filtercart) {
            localStorage.removeItem('cartshop')
            cart.push(Allproducts[productindex])
            localStorage.setItem('cartshop', JSON.stringify(cart))
            rendercart()
            flashmsg.style.display = 'block';
        }else{
            flashmsg.innerHTML = 'you already in cart'
            flashmsg.style.display = 'block';
        }
        setInterval(interval)
        interval = setTimeout(() => {
            flashmsg.innerHTML = 'add to cart successfull'
            flashmsg.style.display = 'none';
        }, 3000);
    }
})


filterbtn.addEventListener('click', function (e) {
    let searchvalue = e.target.innerHTML
    if (e.target.classList.contains('filter-btn')) {
        if (searchvalue == 'All Products') {
            Productfilter('all')
        } else {
            Productfilter(searchvalue)
        }
        onebtn.forEach(function (elem) {
            elem.classList.remove('active')
        })
        e.target.classList.add('active')
    }
})




//removeidtem
function removeitemfromcart(id) {
    console.log(id);
}



var cart = JSON.parse(localStorage.getItem('cartshop')) || []



function rendercart() {
    if(cart.length>0){
        cart_count.innerHTML =  cart.length
    }else{
        cart_count.innerHTML =  0

    }
}
rendercart()