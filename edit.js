var loginuser = JSON.parse(localStorage.getItem("loggedInUser"))
//     ? JSON.parse(localStorage.getItem("loggedInUser"))
//     : [];
//protected routing

if (loginuser) {


//url info
var Url = (window.location).href; 
var Id = Url.substring(Url.lastIndexOf('=') + 1);


let user_records = JSON.parse(localStorage.getItem("registerUsers"))
      

let userfind=user_records.filter((user)=>user.id===parseInt(Id))   

document.querySelector("#fullname").value=userfind[0].name;
document.querySelector('#email').value=userfind[0].email;
        
      
//edit the user
let editbtn=document.getElementById('edit')
editbtn.addEventListener('click',function(){
let fullname=document.querySelector("#fullname").value;
let email=document.querySelector('#email').value

if(fullname===""){
      window.alert('Fullname field should not be empty')
}
if(email===""){
      window.alert('email field should not be empty')
}
if(fullname&&email){
      user_records.map((user,index)=>{
            if(user.id==Id){
                  user.name=fullname;
                  user.email=email;
            }
      })
      localStorage.setItem("registerUsers", JSON.stringify(user_records));  //updating in localstorage
}

})
}else{
      window.alert('Please Login First')
      window.location.href="../html/welcome.html"
    }