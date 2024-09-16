const cart = document.querySelector('.cart');
const cartProductsContainer = cart.querySelector('.cart__products');
const productsContainer = document.querySelector('.products');
const products = productsContainer.querySelectorAll('.product');
const quantityChangeButtons = productsContainer.querySelectorAll('.product__quantity-control');
const addCartProductButtons = productsContainer.querySelectorAll('.product__add');
const cartProducts = cartProductsContainer.getElementsByClassName('cart__product');


const createCartProductElement = (product) => {
  cartProductsContainer.insertAdjacentHTML('beforeEnd', 
    `<div class="cart__product" data-id="${product.dataset.id}">
    <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}">
    <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
    </div>`);
};

const addProduct = (product) => {
  const productToAddQuantity = product.querySelector('.product__quantity-value');
  const existingProduct = [...cartProducts].find(cartProduct => cartProduct.dataset.id === product.dataset.id);
  if (existingProduct === undefined) {
    createCartProductElement(product)
  } else {
    const cartProductValue = existingProduct.querySelector('.cart__product-count');
    cartProductValue.textContent = (+cartProductValue.textContent) + (+productToAddQuantity.textContent)
  }
  productToAddQuantity.textContent = 1;
};


[...quantityChangeButtons].forEach((quantityControlBtn) => {
  quantityControlBtn.addEventListener('click', () => {
    const productQuantity = quantityControlBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    quantityControlBtn.classList.contains('product__quantity-control_inc')
      ? productQuantity.textContent++
      : productQuantity.textContent > 1
        ? productQuantity.textContent--
        : productQuantity.textContent = 1;
  })
});


[...addCartProductButtons].forEach((addCartProductBtn) => {
  addCartProductBtn.addEventListener('click', () => {
    const productToAdd = addCartProductBtn.closest('.product');
    addProduct(productToAdd);
  })
});