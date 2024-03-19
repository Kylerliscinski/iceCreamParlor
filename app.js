const toppings = [{
  name: 'Sprinkles',
  price: 1.50,
  quantity: 0
},
{
  name: 'Chocolate Chips',
  price: 2.00,
  quantity: 0
},
{
  name: 'Gummy Worms',
  price: 1.00,
  quantity: 0
}]

const flavors = [{
  name: 'Vanilla',
  price: 3.00,
  quantity: 0
},
{
  name: 'Chocolate',
  price: 3.00,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 3.00,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  price: 3.00,
  quantity: 0
},
{
  name: 'Waffle Bowl',
  price: 3.00,
  quantity: 0
},
{
  name: 'Sugar Cone',
  price: 3.00,
  quantity: 0
}]

function addItem(itemName) {
  let purchasedItem = itemName
  for (let i = 0; i < toppings.length; i++) {
    let item = toppings[i]
    if (item.name == itemName) {
      purchasedItem = item
    }
  }
  purchasedItem.quantity++
  console.log('item bought', purchasedItem);
  drawCart()
}

function drawCart() {
  let cartContent = ''
  let cartTotal = 0
  for (let i = 0; i < toppings.length; i++) {
    let item = toppings[i]
    if (item.quantity > 0) {
      cartContent += `<p>${item.quantity}x ${item.name} <i class="mdi mdi-currency-usd"></i>${(item.price * item.quantity).toFixed(2)}</p>`
      cartTotal += item.quantity * item.price
    }
  }
  let cartItemsElm = document.getElementById('cart-items')
  cartItemsElm.innerHTML = cartContent

  let totalElm = document.getElementById('total')
  totalElm.innerHTML = `${cartTotal.toFixed(2)}`
}

function checkout() {
  toppings.forEach((item) => {
    item.quantity = 0
  })
  drawCart()
}