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