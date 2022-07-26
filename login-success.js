var logUser = JSON.parse(localStorage.getItem('loggedInUser'));
//console.log(logUser)
if (logUser) { 
var email = logUser.email;
// console.log(email);

document.getElementById("userEmail").innerHTML =email;

}else{
    window.alert('Please Login First')
    window.location.href="../html/welcome.html"
  }