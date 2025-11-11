var profileIcon = document.getElementById("profileIcon")
var currentUser = localStorage.getItem("currentUser")
if (currentUser) {
    currentUser = JSON.parse(currentUser)
    profileIcon.innerText = `${currentUser.username}`

    if (localStorage.getItem("showWelcome")) {
        setTimeout(() => {
            alert(`🎉 Welcome, ${currentUser.username}!`)
            localStorage.removeItem("showWelcome")
        }, 500)
    }
}

var menuBtn = document.getElementById("menu-btn")
var sidebar = document.getElementById("sidebar")
var close = document.getElementById("close")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})
close.addEventListener("click", () => {
    sidebar.classList.remove("active")
})
var products = JSON.parse(localStorage.getItem('products')) || []

function User() {

    var profileIcon = document.getElementById("profileIcon")
    var currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
        currentUser = JSON.parse(currentUser)
        profileIcon.innerText = `${currentUser.username}`

        if (localStorage.getItem("showWelcome")) {
            setTimeout(() => {
                alert(`🎉 Welcome, ${currentUser.username}!`)
                localStorage.removeItem("showWelcome")
            }, 500)
        }
    }
    var container = document.getElementById('userProducts')
    container.innerHTML = ''

    products.forEach((p, index) => {
        var stockText = p.stock <= 0 ? '<span class="out-of-stock">Out of Stock</span>' : p.stock
        var card = document.createElement('div')
        card.className = 'user-card'
        card.innerHTML = `
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <p>ID: ${p.id}</p>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Discount: ${p.discount}</p>
      <p>Stock: ${stockText}</p>
      <p>Description: ${p.description}</p>
    `

        card.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(p))
            window.location.href = 'product-detail.html'
        })

        container.appendChild(card)
    })
}

User()

const product = JSON.parse(localStorage.getItem("selectedProduct"))

if (product) {
    const container = document.getElementById("productDetails")
    container.innerHTML = `
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> ₹${product.price.toLocaleString()}</p>
    <p><strong>Discount:</strong> ₹${product.discount}</p>
    <p><strong>Stock:</strong> ${product.stock}</p>
    <p><strong>Description:</strong> ${product.description}</p>
    <button class="buy-btn">Buy Now</button>
    <button class="cart-btn">Add to Cart</button>
  `

    const buyBtn = document.querySelector(".buy-btn")
    const modal = document.getElementById("buyModal")
    const modalName = document.getElementById("modalProductName")
    const checkoutBtn = document.getElementById("checkoutBtn")
    const continueBtn = document.getElementById("continueBtn")
    const continueSection = document.getElementById("continueSection")
    const totalAmount = document.getElementById("totalAmount")
    const placeOrderBtn = document.getElementById("placeOrderBtn")

    buyBtn.addEventListener("click", () => {
        modal.style.display = "flex"
        modalName.textContent = product.name
        totalAmount.textContent = product.price
    })

    checkoutBtn.addEventListener("click", () => {
        alert("Redirecting to checkout...")
        modal.style.display = "none"
    });

    continueBtn.addEventListener("click", () => {
        continueSection.style.display = "block"
    });

    placeOrderBtn.addEventListener("click", () => {
    const order = {
        name: product.name,
        image: product.image,
        price: product.price,
        time: new Date().toLocaleString(),
        status: "Pending",
        delivery: "Delivery within 3–5 days"
    };

    var userOrder;
    try {
        userOrder = JSON.parse(localStorage.getItem("userOrder"));
        if (!Array.isArray(userOrder)) {
            userOrder = [];
        }
    } catch (e) {
        userOrder = [];
    }

    userOrder.push(order);

    localStorage.setItem("userOrder", JSON.stringify(userOrder));

    alert("✅ Order placed successfully!");
    window.location.href = "user-order.html";
});


    document.querySelector(".cart-btn").addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        const exists = cart.find(p => p.id === product.id)
        if (exists) {
            exists.qty += 1
        } else {
            cart.push({
                ...product,
                qty: 1
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`Added ${product.name} to cart!`);
    })
} else {
    document.getElementById("productDetails").innerHTML = "<p>Product not found.</p>"
}

 var sec = document.querySelectorAll(".sec")

 function scorllevent() {
     var trigger = window.innerHeight * 0.8
     sec.forEach((sec) => {
         var boxtop = sec.getBoundingClientRect().top
         var boxbottom = sec.getBoundingClientRect().bottom

         if (boxtop < trigger && boxbottom > 0) {
             sec.classList.add("active")
         } else {
             sec.classList.remove("active")
         }
     })
 }

 window.addEventListener("scroll", scorllevent)
 scorllevent()

var logout = document.getElementById("logout")
logout.addEventListener("click", () => {
    if (confirm("Do you want to logout?")) {
        localStorage.removeItem("currentUser")
        window.location.href = "user-login.html"
    }

})
