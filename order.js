var menuBtn = document.getElementById("menu-btn");
var sidebar = document.getElementById("sidebar");
var close = document.getElementById("close");
var main = document.getElementById("main");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
});

close.addEventListener("click", () => {
    sidebar.classList.remove("active");
    main.classList.remove("active");
});

var tbody = document.querySelector("#orderTable tbody");
var emptyMsg = document.getElementById("emptyMsg");

function renderOrders() {
    var userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    var userOrder = JSON.parse(localStorage.getItem("userOrder")) || [];
    var allOrders = [...userOrder, ...userOrders];

    tbody.innerHTML = "";

    if (allOrders.length > 0) {

        allOrders.reverse().forEach((item, i) => {
            if (item.status === "Delivered Successfully ✅") return;

            var row = document.createElement("tr");
            row.innerHTML = `
        <td>P${Math.floor(Math.random() * 1000)}</td>
        <td>${item.name}</td>
        <td><img src="${item.image}" alt="${item.name}" width="50"></td>
        <td>₹${item.price}</td>
        <td>Quantity: ${item.qty || 1}</td>
        <td><button class="action-btn" onclick="markDelivered(this, ${i})">Request</button></td>
      `;
            tbody.appendChild(row);
        });
    } else {
        emptyMsg.style.display = "block";
    }
}

function markDelivered(button, index) {
    var userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
    var userOrder = JSON.parse(localStorage.getItem("userOrder")) || [];
    var allOrders = [...userOrder, ...userOrders];

    var item = allOrders[index];
    item.status = "Requested ✅";
    item.date = new Date().toLocaleString();
    button.disabled = true;
    button.textContent = "Requested ✅";
    alert(`🕒 Request sent for ${item.name}. It will be delivered soon...`);

    localStorage.setItem("userOrders", JSON.stringify(userOrders));
    localStorage.setItem("userOrder", JSON.stringify(userOrder));


    setTimeout(() => {
        item.status = "Delivered Successfully ✅";
        item.date = new Date().toLocaleString();


        userOrders = userOrders.filter(o => o.name !== item.name);
        userOrder = userOrder.filter(o => o.name !== item.name);

        localStorage.setItem("userOrders", JSON.stringify(userOrders));
        localStorage.setItem("userOrder", JSON.stringify(userOrder));


        var delivered = JSON.parse(localStorage.getItem("deliveredOrders")) || [];
        delivered.unshift(item);
        localStorage.setItem("deliveredOrders", JSON.stringify(delivered));

        var row = button.closest("tr");
        row.style.transition = "all 0.4s ease";
        row.style.opacity = "0";
        setTimeout(() => row.remove(), 400);

        alert(`✅ ${item.name} Delivered Successfully!`);
    }, 30000);
}

renderOrders();

function scorllevent() {
    var sec = document.querySelectorAll(".sec");
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

var logout = document.getElementById("logout")
logout.addEventListener("click", () => {
    if (confirm("Do you want to logout?")) {
        localStorage.removeItem("currentUser")
        window.location.href = "admin.html"
    }
})