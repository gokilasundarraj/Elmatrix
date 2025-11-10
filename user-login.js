document.getElementById("loginBtn").addEventListener("click",()=>{
  var loginEmail=document.getElementById("loginEmail").value.trim()
  var loginPass=document.getElementById("loginPassword").value.trim()

  var users=JSON.parse(localStorage.getItem("users"))||[]
  var found=users.find(u=>u.email===loginEmail && u.password===loginPass)

  if(found){
    localStorage.setItem("currentUser",JSON.stringify(found))
     localStorage.setItem("showWelcome","true")
    window.location.href="user-main.html"
  }else{
    alert("❌ Invalid Email or Password!")
  }
})
