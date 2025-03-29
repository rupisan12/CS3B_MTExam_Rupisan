const carts = [
  { id: 0, title: "Neon Lights and Modern Designs Icon Pack", price: 15 },
  { id: 1, title: "Arduino Project Remote Controlled Spider", price: 40 },
  { id: 2, title: "LBOXY Management System Software", price: 20 },
  { id: 3, title: "Project Finger Sensor with Software", price: 30 },
];
var product = [];
function addtocart(indexCart) {
  const selectedProduct = carts[indexCart];
  product.push(selectedProduct);
  displaycart();
}
function deleteCart(indexCart) {
  product.splice(indexCart, 1);
  displaycart();
}

function displaycart() {
  let totalmoney = 0;
  const cartItemsDiv = document.getElementById("cartItems");
  const totalPriceDiv = document.getElementById("totalmoneh");

  if (product.length == 0) {
    cartItemsDiv.innerHTML = "Your cart is empty";
    totalPriceDiv.innerHTML = 0 + ".00";
  } else {
    cartItemsDiv.innerHTML = product
      .map((items, indexCart) => {
        totalmoney += items.price;

        return `<div class='cart-items'>
      <p class="detail-style"style='font-size:15px;'>${items.title}</p>
      <div class="price-detail"> <p style='font-size:15px;'> Price: $${items.price}</p>  <p style='font-size:15px;'> Quantity: 1</p></div>
      <button class="mini-x" onclick="deleteCart(${indexCart})">Remove</button>
     </div>
    
      `;
      })
      .join("");
    totalPriceDiv.innerHTML = `${totalmoney}`;
  }
}
