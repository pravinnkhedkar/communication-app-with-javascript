var logUser = JSON.parse(localStorage.getItem('loggedInUser'));
//console.log(logUser)
if (logUser) {
 var name = logUser.fullName;
 var email = logUser.email;
document.getElementById("userName").innerHTML =name;

//protected routing
function authenticate(){
  if(logUser.length===0){
    alert('User is not logedin ')
    window.location.href="welcome.html"
    localStorage.removeItem('loggedInUser');
  }
}
authenticate() 

var msgArr=JSON.parse(localStorage.getItem('msg'))?JSON.parse(localStorage.getItem('msg')):[]

for(var i=0;i<msgArr.length;i++){
  var list=document.getElementById('list')
  var li=document.createElement('li')
  li.textContent='['+msgArr[i].date+']'+email+':'+msgArr[i].msg
  list.append(li)
}

var msgFunction=()=>{
var textMsg=document.getElementById('msgText').value;
 var msgObj={
  'msg':textMsg,
  'date':new Date().toLocaleString().replace(",","")
 }
 msgArr.push(msgObj)
 localStorage.setItem('msg',JSON.stringify(msgArr))
 document.getElementById('msgText').value=''
 window.location.reload(true);

}

var refresh=()=>{
 window.location.reload(true);
}

var logout=()=>{
  localStorage.removeItem('loggedInUser');
}

}else{
  window.alert('Please Login First')
  window.location.href="../html/welcome.html"
}
