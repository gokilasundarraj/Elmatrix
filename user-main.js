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

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Mobile",
    price: 129999,
    discount: 10000,
    stock: 12,
    description: "Latest Apple flagship with A17 Pro chip and titanium body.",
    image: "https://m.media-amazon.com/images/I/81fxjeu8fdL._SL1500_.jpg"
  },
  {
    id: 2,
    name: "MacBook Air M3",
    category: "Laptop",
    price: 114999,
    discount: 5000,
    stock: 8,
    description: "Powerful Apple M3 laptop with 18-hour battery life.",
    image: "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
  },
  {
    id: 4,
    name: "Canon EOS Camera",
    category: "Camera",
    price: 45999,
    discount: 3000,
    stock: 10,
    description: "DSLR camera with 24.1MP sensor and WiFi connectivity.",
    image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
  }
];

const container = document.getElementById("productList")

products.forEach(p => {
  const div = document.createElement("div")
  div.classList.add("product-card")
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>₹${p.price.toLocaleString()}</p>
    <button class="add-btn" data-id="${p.id}">Add to Cart</button>
  `;
  div.addEventListener("click", (e) => {
    if (!e.target.classList.contains("add-btn")) {
      localStorage.setItem("selectedProduct", JSON.stringify(p))
      window.location.href = "product-detail.html"
    }
  })
  container.appendChild(div)
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const id = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(item => item.id === id);
    if (exists) {
      exists.qty += 1
    } else {
      cart.push({ ...product, qty: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    alert(`Added ${product.name} to cart!`)
  }
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
 var logout =document.getElementById("logout")
 logout.addEventListener("click", () => {
     if (confirm("Do you want to logout?")) {
         localStorage.removeItem("currentUser")
         window.location.href = "user-login.html"
     }
 })
