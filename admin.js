var line1 = document.querySelector(".line1")

var admin = document.querySelector(".admin")
admin.addEventListener("mouseenter", () => {
    admin.style.height = "60vh"
    admin.style.display = "flex"
    admin.style.flexDirection = "column"
    admin.style.justifyContent = "center"
    admin.style.alignItems = "center"
    admin.style.gap = "20px"
    admin.style.padding = "80px 100px 100px 100px"
    admin.style.boxShadow = "0 0 30px #007ACC"
    var img = document.getElementById("logo")
    img.style.transform = "rotateY(360deg)"
    img.style.boxShadow = "0 0 20px cyan"
    var line1 = document.querySelector(".line1")
    line1.textContent = "Thanks for stopping by, welcome to my page..😊✨"
    line1.style.display = "flex"
    line1.style.justifyContent = "center"
    line1.style.alignItems = "center"
    line1.style.height = "60px"
    line1.style.width = '200px'
    line1.style.background = "red"
    line1.style.position = "relative"
    line1.style.position = "absolute"
    line1.style.right = "0"
    line1.style.bottom = "30px"
    line1.style.background = "black"
    line1.style.padding = "10px"
    line1.style.borderBottom = "2px solid #007ACC"
    line1.style.animation = "msg 3s ease-in-out 1"
    admin.style.transform = "perspective(500px) rotatex(-2deg) translateX(-20px)"
    admin.style.top = "-70%"
    admin.style.left = "30%"
})
document.addEventListener("click", () => {
    line1.style.transform = "translateX(300px)"
    line1.style.transition = "0.5s"
})

admin.addEventListener("mouseleave", () => {
    var img = document.getElementById("logo")
    img.style.transform = "rotateY(-360deg)"
    img.style.boxShadow = "0 0 20px cyan"
})
var email = document.querySelector(".email")
var el = document.querySelector(".el")
email.addEventListener("focus", () => {
    el.style.position = 'absolute'
    el.style.zIndex = "2"
    el.style.top = "-10px"
    el.style.left = "10px"
    el.style.fontSize = "12px"
    el.style.fontWeight = "800"
    el.style.color="black"
    el.style.textShadow = "1px 1px 5px white, -1px -1px 5px white, -1px 1px 5px white, 1px -1px 5px white"
    el.style.padding = "3px"
    email.style.outline="none"
    el.style.transition = "0.5s"
    email.style.transition = "0.5s"
    document.body.style.animation = "hvr 0.5s 2"
})

email.addEventListener("blur", () => {
    var logo = document.getElementById("logo")
    logo.style.animation = "lr 0.2s 5"
})

var pw = document.querySelector(".pw")
var password = document.querySelector(".password")
password.addEventListener("focus", () => {
    pw.style.position = 'absolute'
    pw.style.zIndex = "2"
    pw.style.top = "-10px"
    pw.style.left = "10px"
    pw.style.fontSize = "12px"
    pw.style.fontWeight = "800"
    password.style.outline="none"
    pw.style.color = "black"
    pw.style.textShadow = "1px 1px 5px white, -1px -1px 5px white, -1px 1px 5px white, 1px -1px 5px white"
    pw.style.padding = "3px"
    pw.style.borderTopLeftRadius = "10px"
    pw.style.borderTopRightRadius = "10px"
    pw.style.transition = "0.5s"
    password.style.transition = "0.5s"
    document.body.style.animation = "hover 0.5s 2"

})

password.addEventListener("blur", () => {
    var logo = document.getElementById("logo")
    logo.style.animation = "lro 0.2s 5"
})

var a = document.querySelector(".a")
a.addEventListener("mouseenter", () => {
    a.style.boxShadow = "0 0 20px cyan"
    a.style.background = "black"
})
a.addEventListener("mouseleave", () => {
    a.style.boxShadow = "0 0 0 white"
    a.style.background = "white"
})
var email = document.getElementById("email")
var pass = document.getElementById("password")
email.addEventListener("input", () => {
    if ("admin123@gmail.com" != email.value.trim()) {
        var err1 = document.querySelector(".err1")
        err1.textContent = "Email Id is Wrong..!"
        err1.style.color = "red"
        err1.style.height = "30px"
        err1.style.display = "flex"
        err1.style.alignItems = "center"
        err1.style.fontSize = "12px"
    }
    if ("admin123@gmail.com" == email.value.trim()) {
        var err1 = document.querySelector(".err1")
        err1.style.display = "none"
    }
})

pass.addEventListener("input", () => {
    if ("admin123@gmail.com" != pass.value.trim()) {
        var err2 = document.querySelector(".err2")
        err2.textContent = "Password is Wrong..!"
        err2.style.color = "red"
        err2.style.height = "30px"
        err2.style.display = "flex"
        err2.style.alignItems = "center"
        err2.style.fontSize = "12px"
    }
    if ("admin@123" == pass.value.trim()) {
        var err2 = document.querySelector(".err2")
        err2.style.display = "none"
    }
})

function login() {
    var email = document.getElementById("email").value.trim()
    var pass = document.getElementById("password").value.trim()

    if ("admin123@gmail.com" == email && "admin@123" == pass) {
        localStorage.setItem("loginSuccess", "true")
        window.location.href = "admin-main.html"
    } else if (email == "" || pass == "") {
        var err3 = document.querySelector(".err3")
        err3.textContent = "please Enter the email & Password"
        err3.style.color = "red"
        err3.style.height = "30px"
        err3.style.display = "flex"
        err3.style.alignItems = "center"
        err3.style.fontSize = "12px"
    } else {

        var err3 = document.querySelector(".err3")
        err3.textContent = "Email or Password is Wrong...!"
        err3.style.color = "red"
        err3.style.height = "30px"
        err3.style.display = "flex"
        err3.style.alignItems = "center"
        err3.style.fontSize = "12px"
    }

}
email, pass.addEventListener("input", () => {
    if ("admin123@gmail.com" == email.value.trim() && "admin@123" == pass.value.trim()) {
        var err3 = document.querySelector(".err3")
        err3.style.display = "none"

    }

})


var clickcount = 0
var parent = document.querySelector(".parent")
parent.addEventListener("click", () => {
    clickcount++
    var i1 = document.querySelector(".i1")
    var i2 = document.querySelector(".i2")
    var passw = document.getElementById("password")
    if (clickcount % 2 === 1) {
        i1.style.zIndex = 1
        i2.style.zIndex = -1
        passw.setAttribute("type", "text")
        console.log(clickcount)
    } else {
        i1.style.zIndex = -1
        i2.style.zIndex = 1
        passw.setAttribute("type", "password")

    }

})


var mediaQuery = window.matchMedia("(max-width:1241px)")
function applymedia(e) {
    if (e.matches) {
        admin.addEventListener("mouseenter", () => {
            admin.style.left = "20%"
            admin.style.top="-85%"
            line1.style.bottom = "-250px"
        })
    } else {
        admin.addEventListener("mouseenter", () => {
            admin.style.left = "30%"
        })
    }
}
applymedia(mediaQuery)

var media = window.matchMedia("(max-width:391px)")
function apply(e) {
    if (e.matches) {
        admin.addEventListener("mouseenter", () => {
            admin.style.left = "8%"
        })
    } else {
        admin.addEventListener("mouseenter", () => {
            admin.style.left = "20%"
        })
    }
}
apply(media)