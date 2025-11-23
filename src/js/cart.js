
// cart page start
const cartitems = document.querySelector('.cart-items')
let cluster
function rendercartItem(cart) {
    cluster = ''
    cart?.forEach(function (elem, index) {
        cluster += `
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
                            <button class="remove-btn">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                    <div class="item-total">₹${elem.price}</div>
                </div>
        `
    })

    cartitems.innerHTML = cluster
}

const cartrender = JSON.parse(localStorage.getItem('cartshop'))
rendercartItem(cartrender)





