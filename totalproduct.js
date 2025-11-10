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
         currentUser = JSON.parse(currentUser);
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
         });

         container.appendChild(card)
     })
 }

 User()

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