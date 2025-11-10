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

  const container = document.getElementById("buy-container");
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  console.log(product)

  if (product) {
      const total = product.price * product.qty;
      container.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Price: ₹${product.price}</p>
    <p>Quantity: ${product.qty}</p>
    <p><strong>Total: ₹${total}</strong></p>
    <button id="buyNowBtn">Buy</button>
  `;
  } else {
      container.innerHTML = "<h3>No product selected!</h3>";
  }
  var a = 1
  var b = 1
  document.addEventListener("click", (e) => {
      if (e.target.id === "buyNowBtn" && a == 1) {
          container.innerHTML += `
          <div style="margin-top:20px;">
            <p style="font-weight:bold;">🛍️ You want to buy this product?</p>
            <button id="recheckBtn">Recheck the Product</button>
            <button id="codBtn">Cash on Delivery</button>
          </div>
    `;
          a++

      }

      if (e.target.id === "recheckBtn") {
          window.location.href = "cart.html";
      }

      if (e.target.id === "codBtn" && b == 1) {
          container.innerHTML += `
          <div style="margin-top:20px;">
            <button id="placeOrderBtn">Place Order</button>
          </div>
        `;
          b++

      }

      if (e.target.id === "placeOrderBtn") {
          const today = new Date();
          const deliveryDate = new Date(today);
          deliveryDate.setDate(today.getDate() + 5);
          const formattedDate = deliveryDate.toLocaleDateString('en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
          });

          const total = product.price * product.qty;

          const order = {
              name: product.name,
              image: product.image,
              price: total,
              qty: product.qty,
              status: "Requested 🕒",
              date: new Date().toLocaleString(),
              delivery: formattedDate
          };

          const userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
          userOrders.push(order);
          localStorage.setItem("userOrders", JSON.stringify(userOrders));

          alert("✅ Order placed successfully!");
          window.location.href = "user-order.html";

          localStorage.removeItem("selectedProduct");
      }

  });