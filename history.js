var profileIcon = document.getElementById("profileIcon");
var currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  currentUser = JSON.parse(currentUser);
  if (profileIcon) profileIcon.innerText = `${currentUser.username}`;

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

if (menuBtn && sidebar && close) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}


function loadOrder() {
  const deliveredOrders = JSON.parse(localStorage.getItem("deliveredOrders")) || [];
  const history = JSON.parse(localStorage.getItem("orderHistory")) || [];

  const orderBox = document.getElementById("orderDetails");
  const historyBox = document.getElementById("orderHistory");

  if (orderBox) {
    if (deliveredOrders.length > 0) {
      let totalPrice = 0;
      orderBox.innerHTML = "";

      deliveredOrders.forEach((item) => {
        totalPrice += Number(item.price);

        const div = document.createElement("div");
        div.className = "order-item";
        div.innerHTML = `
          <img src="${item.image || 'images/no-image.png'}" alt="${item.name}">
          <p><strong>Product:</strong> ${item.name}</p>
          <p><strong>Price:</strong> ₹${item.price}</p>
          <p class="success-msg">✅ Delivered Successfully on ${item.date}</p>
        `;
        orderBox.appendChild(div);
      });

      const totalDiv = document.createElement("div");
      totalDiv.className = "total-price";
      totalDiv.innerHTML = `<strong>Total Delivered Orders: ${deliveredOrders.length} | Total: ₹${totalPrice}</strong>`;
      orderBox.appendChild(totalDiv);
    } else {
      orderBox.innerHTML = "<p class='no-order'>No delivered orders yet.</p>";
    }
  }

  if (historyBox) {
    if (history.length > 0) {
      historyBox.innerHTML = "";
      history.forEach((item) => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = `
          <img src="${item.image || 'images/no-image.png'}" alt="${item.name}">
          <p><strong>Product:</strong> ${item.name}</p>
          <p><strong>Price:</strong> ₹${item.price}</p>
          <p class="cancelled">❌ Cancelled on: ${item.date}</p>
        `;
        historyBox.appendChild(div);
      });
    } else {
      historyBox.innerHTML = "<p class='no-order'>No cancelled orders yet.</p>";
    }
  }
}

var sec = document.querySelectorAll(".sec");

function scorllevent() {
  var trigger = window.innerHeight * 0.8;
  sec.forEach((sec) => {
    var boxtop = sec.getBoundingClientRect().top;
    var boxbottom = sec.getBoundingClientRect().bottom;

    if (boxtop < trigger && boxbottom > 0) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scorllevent);
scorllevent();

var logout = document.getElementById("logout");
if (logout) {
  logout.addEventListener("click", () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("currentUser");
      window.location.href = "user-login.html";
    }
  });
}

loadOrder();
