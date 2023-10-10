
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalAmount = document.getElementById("total-amount");

    cartItems.forEach((item) => {
        const quantityControl = item.querySelector(".quantity-control");
        const itemQuantity = item.querySelector(".item-quantity");
        const deleteButton = item.querySelector(".delete-item");
        const likeButton = item.querySelector(".like-item");

        quantityControl.addEventListener("click", function() {
            const action = this.getAttribute("data-action");
            let quantity = parseInt(itemQuantity.textContent);

            if (action === "increase") {
                quantity++;
            } else if (action === "decrease" && quantity > 1) {
                quantity--;
            }

            itemQuantity.textContent = quantity;
            updateTotal();
        });

        deleteButton.addEventListener("click", function() {
            item.remove();
            updateTotal();
        });

        likeButton.addEventListener("click", function() {
            likeButton.classList.toggle("liked");
        });
    });

    function updateTotal() {
        let totalPrice = 0;

        cartItems.forEach((item) => {
            const itemPrice = parseFloat(item.querySelector(".item-price").textContent.slice(1));
            const itemQuantity = parseInt(item.querySelector(".item-quantity").textContent);
            totalPrice += itemPrice * itemQuantity;
        });

        totalAmount.textContent = totalPrice.toFixed(2);
    }
} 
function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
      heart.classList.toggle('red');
    });
  })();