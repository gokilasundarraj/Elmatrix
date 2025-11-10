var profileIcon = document.getElementById("profileIcon");
var currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  currentUser = JSON.parse(currentUser);

  var i = document.createElement("i");
  i.className = "fa-solid fa-user";
 
  profileIcon.innerHTML = "";
  profileIcon.appendChild(i);

  var username = document.createTextNode(currentUser.username);
  profileIcon.appendChild(username);

  if (localStorage.getItem("showWelcome")) {
    setTimeout(() => {
      alert(`🎉 Welcome, ${currentUser.username}!`);
      localStorage.removeItem("showWelcome");
    }, 500);
  }

  profileIcon.style.cursor = "pointer";
  profileIcon.addEventListener("click", () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("currentUser");
      window.location.href = "user-login.html";
    }
  });
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

var cart = JSON.parse(localStorage.getItem("cart")) || []

function renderCart() {
  const container = document.getElementById("cartItems")
  container.innerHTML = ''

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty">Cart is empty.</p>'
    document.getElementById("cartTotal").innerText = ''
    return;
  }

  var totalPrice = 0

  cart.forEach((p, index) => {
    totalPrice += p.price * p.qty

    const div = document.createElement("div")
    div.className = "cart-item"
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="cart-item-details">
        <p><strong>${p.name}</strong></p>
        <p>Price: ₹${p.price.toLocaleString()}</p>
        <div class="qty-controls">
          <button class="qty-btn decrease" data-index="${index}"><font>-</font></button>
          <span>Qty: ${p.qty}</span>
          <button class="qty-btn increase" data-index="${index}"><font>+</font></button>
        </div>
      </div>
      <button class="buy-btn" data-index="${index}">Buy</button>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `
    container.appendChild(div)
  })

    document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index
      localStorage.setItem("selectedProduct", JSON.stringify(cart[index]))
      window.location.href = "cart-detail.html"
    })
  })

  document.getElementById("cartTotal").innerText = "Total: ₹" + totalPrice.toLocaleString()


  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-index");
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart()
    })
  })

  document.querySelectorAll(".increase").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-index");
      cart[idx].qty++;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart()
    })
  })

  document.querySelectorAll(".decrease").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-index")
      if (cart[idx].qty > 1) {
        cart[idx].qty--
      } else {
        cart.splice(idx, 1)
      }
      localStorage.setItem("cart", JSON.stringify(cart))
      renderCart()
    })
  })
}

renderCart()

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