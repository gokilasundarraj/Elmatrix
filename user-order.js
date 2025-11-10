var profileIcon = document.getElementById("profileIcon");
var currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  currentUser = JSON.parse(currentUser);
  profileIcon.innerText = `${currentUser.username}`;

  if (localStorage.getItem("showWelcome")) {
    setTimeout(() => {
      alert(`🎉 Welcome, ${currentUser.username}!`);
      localStorage.removeItem("showWelcome");
    }, 500);
  }
}

var menuBtn = document.getElementById("menu-btn");
var sidebar = document.getElementById("sidebar");
var close = document.getElementById("close");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

function loadOrder() {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var userOrder = JSON.parse(localStorage.getItem("userOrder")) || [];
  var userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
  var history = JSON.parse(localStorage.getItem("orderHistory")) || [];

  var orderBox = document.getElementById("orderDetails");
  var historyBox = document.getElementById("orderHistory");

  var allorder = [...userOrder, ...userOrders];

  if (allorder.length > 0) {
    orderBox.innerHTML = "";
    allorder.forEach((item, i) => {
      const isDelivered = item.status === "Delivered Successfully ✅";

      orderBox.innerHTML += `
        <div class="order-item sec ${isDelivered ? 'delivered' : ''}">
          <img src="${item.image}" alt="${item.name}">
          <p><strong>${item.name}</strong> - ₹${item.price}</p>
          <p>Quantity: ${item.qty || 1}</p>
          ${
            isDelivered
              ? `<p class="success-msg">🎉 Delivered Successfully!</p>`
              : `
                <p>Status: ${item.status || "Pending"}</p>
                <p class="delivery">🕒 Ordered on: ${item.date || new Date().toLocaleString()}</p>
                <button class="refresh-btn" onclick="refreshOrder()">Refresh</button>
                <button class="cancel-btn" onclick="cancelOrder(${i})">Cancel Order</button>
              `
          }
        </div>
      `;
    });
  } else {
    orderBox.innerHTML = "<p class='no-order'>No active orders.</p>";
  }
  if (history.length > 0) {
    historyBox.innerHTML = "";
    history.forEach((item) => {
      historyBox.innerHTML += `
        <div class="history-item">
          <img src="${item.image}" alt="${item.name}">
          <p><strong>${item.name}</strong> - ₹${item.price}</p>
          <p class="cancelled">❌ Cancelled on: ${item.date || new Date().toLocaleString()}</p>
        </div>
      `;
    });
  } else {
    historyBox.innerHTML = "<p class='no-history'>No order history yet.</p>";
  }

  localStorage.setItem("cart", JSON.stringify(cart));

}

function refreshOrder() {
  alert("✅ Order status refreshed");
  window.location.reload();
}

function cancelOrder(index) {
  var userOrder = JSON.parse(localStorage.getItem("userOrder")) || [];
  var userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
  var history = JSON.parse(localStorage.getItem("orderHistory")) || [];

  var allOrders = [...userOrder, ...userOrders];
  var cancelledOrder = allOrders[index];
  cancelledOrder.date = new Date().toLocaleString();

  history.unshift(cancelledOrder);

  userOrder = userOrder.filter(o => o.name !== cancelledOrder.name);
  userOrders = userOrders.filter(o => o.name !== cancelledOrder.name);

  localStorage.setItem("userOrder", JSON.stringify(userOrder));
  localStorage.setItem("userOrders", JSON.stringify(userOrders));
  localStorage.setItem("orderHistory", JSON.stringify(history));

  alert("❌ Order cancelled and moved to history");
  loadOrder();
}

loadOrder();