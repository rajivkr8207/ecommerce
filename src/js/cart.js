
// cart page start
const cartitems = document.querySelector('.cart-items')



var valuecart
function removeitemfromcart(id) {
    var cart = JSON.parse(localStorage.getItem('cartshop')) || []

    valuecart = cart.filter((item, i) => item.id != id)
    localStorage.removeItem('cartshop');
    (localStorage.setItem('cartshop', JSON.stringify(valuecart)))
    rendercartItem()
    rendercart()
    checkoutsummery()

}


function rendercartItem() {
    var cart = JSON.parse(localStorage.getItem('cartshop')) || []
    let innertexthai = ''
    cart?.forEach(function (elem, index) {
        innertexthai += `
   <div class="cart-item">
                    <img
                        src="${elem.img}"
                        alt="Dumbbell Set"
                        class="item-image"
                    />
                    <div class="item-details">
                        <h3 class="item-name">${elem.name}</h3>
                        <span class="item-category">Fitness</span>
                        <div class="item-price">₹${elem.price}</div>
                        <div class="item-actions">
                            <button onClick='removeitemfromcart(${elem.id})' class="remove-btn">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                    <div class="item-total">₹${elem.price}</div>
                </div>
        `
    })
    if (cart.length>0){
        cartitems.innerHTML = ''
        cartitems.innerHTML = innertexthai
    }else{
        cartitems.innerHTML = '<h1>cart item is empty</h1>'

    }
}

// const cartrender = JSON.parse(localStorage.getItem('cartshop')) || []
rendercartItem()



function checkoutsummery() {
    const ordersummary = document.querySelector('.order-summary')
    var cart = JSON.parse(localStorage.getItem('cartshop')) || []
    let price  = cart.reduce((acc, elem)=>(elem.price+acc), 0)
    const item_count = document.querySelector('.item_count')
    const subprice = document.querySelector('.subprice')
    const totalpice = document.querySelector('.totalpice')
    const taxpay = document.querySelector('.taxpay')
    const discountelem = document.querySelector('.discount')

    let tax = price * 5/100
    let discount = price>3000 ? 500: 100
    let totalprice = (price-200-tax-discount).toFixed(2)
    item_count.innerHTML  = cart.length 
    subprice.innerHTML = price
    discountelem.innerHTML = discount
    taxpay.innerHTML = tax.toFixed(2)
    totalpice.innerHTML = totalprice
    if (totalprice>0){
        ordersummary.style.display= 'block'
    }else{
        ordersummary.style.display= 'none'

    }
}
checkoutsummery()

function rendercart() {
    var cart = JSON.parse(localStorage.getItem('cartshop')) || []
    if(cart.length>0){
        cart_count.innerHTML =  cart.length
    }else{
        cart_count.innerHTML =  0

    }
}
rendercart()


// function rendercart() {
//     if (cart.length > 0) {
//         cart_count.innerHTML = cart.length
//         console.log(cart.length);
//     }
// }
// rendercart()