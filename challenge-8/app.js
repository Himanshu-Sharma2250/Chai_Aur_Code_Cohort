const cartItemsContainer = document.getElementById("cart-items");
const emptyCartItem = document.querySelector(".empty-cart");

let totalProducts = {
    "Jeans": 0,
    "Hat": 0,
    "Sneakers": 0,
    "T-Shirt": 0
};

const previousProducts = {};

function increaseProduct(product) {
    totalProducts[product]++;
    return totalProducts[product];
}

function decreaseProduct(product) {
    if (totalProducts[product] > 0) {
        totalProducts[product]--;
    }
    return totalProducts[product];
}

function addToCart(product, price) {
    if (cartItemsContainer.contains(emptyCartItem)) {
        emptyCartItem.remove();
    }

    // Check if the product is already in the cart
    if (previousProducts[product]) {
        let quantitySpan = previousProducts[product].quantitySpan;
        let priceSpan = previousProducts[product].priceSpan;

        let newQuantity = increaseProduct(product);
        quantitySpan.textContent = newQuantity;

        let totalCost = price * newQuantity;
        priceSpan.textContent = `$${totalCost.toFixed(2)}`;
    } else {
        // If product is not in cart, create new elements
        const cartItemElement = document.createElement('div');
        cartItemElement.className = "cart-item";

        const productName = document.createElement('span');
        productName.textContent = product;

        const quantityControl = document.createElement('div');
        quantityControl.className = "quantity-controls";

        const quantityDecreaseButton = document.createElement('button');
        quantityDecreaseButton.innerText = '-';

        const totalQuantity = document.createElement('span');
        totalQuantity.textContent = increaseProduct(product);

        const quantityIncreaseButton = document.createElement('button');
        quantityIncreaseButton.innerText = '+';

        const productTotalCost = document.createElement('span');
        let totalCost = price * totalProducts[product];
        productTotalCost.innerText = `$${totalCost.toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.innerText = "Remove";

        // Append elements to quantity control div
        quantityControl.appendChild(quantityDecreaseButton);
        quantityControl.appendChild(totalQuantity);
        quantityControl.appendChild(quantityIncreaseButton);
        quantityControl.appendChild(productTotalCost);
        quantityControl.appendChild(removeButton);

        // Append elements to cart item div
        cartItemElement.appendChild(productName);
        cartItemElement.appendChild(quantityControl);

        // Append to cart
        cartItemsContainer.appendChild(cartItemElement);

        // Store references to update later
        previousProducts[product] = {
            element: cartItemElement,
            quantitySpan: totalQuantity,
            priceSpan: productTotalCost
        };

        // Decrease button functionality
        quantityDecreaseButton.addEventListener('click', () => {
            let newQuantity = decreaseProduct(product);
            if (newQuantity > 0) {
                totalQuantity.textContent = newQuantity;
                let updatedCost = price * newQuantity;
                productTotalCost.textContent = `$${updatedCost.toFixed(2)}`;
            } else {
                cartItemElement.remove();
                delete previousProducts[product];
            }

            const displayTotalPrice = document.getElementById("displayCartPrice")
            displayTotalPrice.innerText = `Total: $${getTotalCartPrice().toFixed(2)}`

            if (getTotalCartPrice().toFixed(2) == 0.00) {
                cartItemsContainer.appendChild(emptyCartItem)
            }
        });

        // Increase button functionality
        quantityIncreaseButton.addEventListener('click', () => {
            let newQuantity = increaseProduct(product);
            totalQuantity.textContent = newQuantity;
            let updatedCost = price * newQuantity;
            productTotalCost.textContent = `$${updatedCost.toFixed(2)}`;

            const displayTotalPrice = document.getElementById("displayCartPrice")
            displayTotalPrice.innerText = `Total: $${getTotalCartPrice().toFixed(2)}`
        });

        // Remove button functionality
        removeButton.addEventListener('click', () => {
            cartItemElement.remove();
            delete previousProducts[product];
            totalProducts[product] = 0;

            const displayTotalPrice = document.getElementById("displayCartPrice")
            displayTotalPrice.innerText = `Total: $${getTotalCartPrice().toFixed(2)}`

            if (getTotalCartPrice().toFixed(2) == 0.00) {
                cartItemsContainer.appendChild(emptyCartItem)
            }
        });
    }

    function getTotalCartPrice() {
        let totalPrice = 0

        for (let product in previousProducts) {
            let priceText = previousProducts[product].priceSpan.textContent
            let price = Number(priceText.replace("$", ""))

            totalPrice += price
        }

        return totalPrice
    }

    const displayTotalPrice = document.getElementById("displayCartPrice")
    displayTotalPrice.innerText = `Total: $${getTotalCartPrice().toFixed(2)}`

}

