document.getElementById("registerBtn").addEventListener("click",()=>{
  var username=document.getElementById("username").value.trim()
  var email=document.getElementById("email").value.trim()
  var phone=document.getElementById("phone").value.trim()
  var password=document.getElementById("password").value.trim()
  var birthdate=document.getElementById("birthdate").value.trim()

  if(!username||!email||!phone||!password||!birthdate){
    alert("⚠️ Fill all fields!")
    return;
  }

  var users=JSON.parse(localStorage.getItem("users"))||[]
  if(users.some(u=>u.email===email)){
    alert("❌ Email already registered!")
    return;
  }

  var newUser={username,email,phone,password,birthdate}
  users.push(newUser)
  localStorage.setItem("users",JSON.stringify(users))

  alert("✅ Registered Successfully!")
  window.location.href="user-login.html"
});