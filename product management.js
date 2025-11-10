var menuBtn = document.getElementById("menu-btn")
var sidebar = document.getElementById("sidebar")
var close = document.getElementById("close")
var main = document.getElementById("main")

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active")
  main.classList.toggle("active")
})
close.addEventListener("click", () => {
  sidebar.classList.remove("active")
  main.classList.remove("active")
})
var products = JSON.parse(localStorage.getItem('products')) || []
var editIndex = null

products = products.map(p => {
  if (!p.id) p.id = 'P' + Math.floor(Math.random() * 100000)
  return p
});
localStorage.setItem('products', JSON.stringify(products))

function generateID() {
  return 'P' + Math.floor(Math.random() * 100000)
}

function renderProducts() {
  var container = document.getElementById('productList')
  container.innerHTML = ''
  products.forEach((p, index) => {
    var card = document.createElement('div')
    card.className = 'product-card'
    card.innerHTML = `
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <p>ID: ${p.id}</p>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Discount: ${p.discount}</p>
      <p>Stock: ${p.stock}</p>
      <font>description: ${p.description}</font>
     <font class="f">
       <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
      <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
      </font>
    `
    container.appendChild(card)
  })

  localStorage.setItem('totalProducts', products.length)
}

document.getElementById('productForm').addEventListener('submit', function (e) {
  e.preventDefault()

  var name = document.getElementById('name').value
  var image = document.getElementById('image').value
  var category = document.getElementById('category').value
  var price = document.getElementById('price').value
  var stock = document.getElementById('stock').value
  var description = document.getElementById('description').value
  var discount = document.getElementById("discount").value

  if (editIndex !== null) {
    var existingId = products[editIndex].id
    products[editIndex] = {
      id: existingId,
      name,
      image,
      category,
      price,
      discount,
      stock,
      description
    }
    editIndex = null
  } else {
    var id = generateID()
    products.push({
      id,
      name,
      image,
      category,
      price,
      discount,
      stock,
      description
    })
  }

  localStorage.setItem('products', JSON.stringify(products))
  renderProducts()
  this.reset()
})

function editProduct(index) {
  editIndex = index
  var p = products[index]
  document.getElementById('name').value = p.name
  document.getElementById('image').value = p.image
  document.getElementById('category').value = p.category
  document.getElementById('price').value = p.price
  document.getElementById('discount').value = p.discount
  document.getElementById('stock').value = p.stock
  document.getElementById('description').value = p.description
}

function deleteProduct(index) {
  if (confirm('Are you sure you want to delete this product?')) {
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    renderProducts()
  }
}

renderProducts()

var sec = document.querySelectorAll(".sec")

function scorllevent() {
  var trigger = window.innerHeight * 0.8
  sec.forEach((sec) => {
    var boxtop = sec.getBoundingClientRect().top
    var boxbottom = sec.getBoundingClientRect().bottom

    if (boxtop < trigger && boxbottom > 0) {
      sec.classList.add("active")
      var pron = document.getElementById("name")
      var img = document.getElementById('image')
      var cat = document.getElementById('category')
      var price = document.getElementById('price')
      var dis = document.getElementById('discount')
      var stock = document.getElementById('stock')
      var des = document.getElementById('description')
      pron.style.animation="one 2s linear 1"
      img.style.animation="two 2s linear 1"
      cat.style.animation="one 2s linear 1"
      price.style.animation="one 2s linear 1"
      dis.style.animation="two 2s linear 1"
      stock.style.animation="two 2s linear 1"
      des.style.animation="one 2s linear 1"
     
    } else {
      sec.classList.remove("active")
      pron.style.animation="none"
      img.style.animation="none"
      cat.style.animation="none"
      price.style.animation="none"
      dis.style.animation="none"
      stock.style.animation="none"
      des.style.animation="none"

    }
  })
}

window.addEventListener("scroll", scorllevent)
scorllevent()

var logout = document.getElementById("logout")
logout.addEventListener("click", () => {
  if (confirm("Do you want to logout?")) {
    localStorage.removeItem("currentUser")
    window.location.href = "admin.html"
  }
})