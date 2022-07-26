var user_records=JSON.parse(localStorage.getItem("registerUsers"));

if (user_records) {
var url = window.location.href
var id = url.substring(url.lastIndexOf('?') + 1);
var id1 = parseInt(id)

function deleteUser(){
	
      const btn=document.getElementById("okbtn");
      btn.onclick=function(){
  for( var i=0;i<user_records.length;i++){
      if(user_records[i].id===id1){
		
          user_records.splice(i,1);
       
          localStorage.setItem("registerUsers",JSON.stringify(user_records));
      }
  }

  location.href="../html/users.html";
  
      }
    
  }

}else{
    window.alert('Please Login First')
    window.location.href="../html/welcome.html"
  }
