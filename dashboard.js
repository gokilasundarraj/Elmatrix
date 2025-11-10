var menuBtn = document.getElementById("menu-btn")
var sidebar = document.getElementById("sidebar")
var close = document.getElementById("close")
var main = document.getElementById("main")

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active")
  main.classList.toggle("active")
});
close.addEventListener("click", () => {
  sidebar.classList.remove("active")
  main.classList.remove("active")
});

function updateDashboard() {
  var users = JSON.parse(localStorage.getItem("users")) || []
  document.getElementById("userCount").textContent = users.length

  var orders = JSON.parse(localStorage.getItem("orders")) || []

  if (!Array.isArray(orders) && orders) orders = [orders]

  document.getElementById("orderCount").textContent = orders.length

  var products = JSON.parse(localStorage.getItem("products")) || []
  document.getElementById("productCount").textContent = products.length

  var totalProfit = 0
  orders.forEach(o => {
    var price = Number(o.price) || 0
    var discount = Number(o.discount) || 0
    totalProfit += price - discount
  })
  document.getElementById("profitCount").textContent = `₹${totalProfit}`
}

function showUserList() {
  var users = JSON.parse(localStorage.getItem("users")) || []
  var listDiv = document.getElementById("userList")
  if (users.length === 0) {
    listDiv.innerHTML = "<p>No users found!</p>"
    return;
  }
  var html = "<h3>User Details:</h3><ul>"
  users.forEach(u => {
    html += `<li><strong>Email:</strong> ${u.email}<br><strong>Password:</strong> ${u.password}</li>`
  })
  html += "</ul>"
  listDiv.innerHTML = html
}

updateDashboard()

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