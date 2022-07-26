showData();

function registerData() {

    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var confirm = document.getElementById('pass2').value;
    //---------- Validation of FullName -----------
    if (name == "") {
        document.getElementById('fullName').innerHTML = " * Please fill the name field";
        return false;
    }
    if (name.length <= 2 || (name.length > 20)) {
        document.getElementById('fullName').innerHTML = " * Length is too short";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('fullName').innerHTML = " * Only characters are allowed";
        return false;
    }
    //---------- Validation of Email -----------
    if (email == "") {
        document.getElementById('mail').innerHTML = " * Please enter your email";
        return false;
    }
    //---------- Validation of Password & confirm password -----------
    if (password == "") {
        document.getElementById('password').innerHTML = " * Please enter password";
        return false;
    }
    //  var p = /^(?=.*[0-9])(?=.*[a-z]).{6}$/;
    if (password.length <= 3 || password.length >= 8) {
        document.getElementById('password').innerHTML = " * Length must be upto 8";
        return false;
    }
    if (confirm == "") {
        document.getElementById('confirmPass').innerHTML = " * Please fill this field";
        return false;
    }
    if (password != confirm) {
        document.getElementById('confirmPass').innerHTML = " * Password not matching";
        return false;
    }
    //------- For storing data to localstorage as an array of object --------
    var users = JSON.parse(localStorage.getItem("registerUsers")) ? JSON.parse(localStorage.getItem("registerUsers")) : [];
    //console.log(users);
    var newUser = {
        "name": name,
        "email": email,
        "password": password,
        "confirm": confirm,
        id:Number(new Date)
    }
    var userExists = users.some((user) => user.email === newUser.email);
    if (userExists) {
        window.alert("User is already exists");
        return false;
    }
    else {
        users.push(newUser);
    }
    var userString = JSON.stringify(users);
    localStorage.setItem('registerUsers', userString);
    showData();
}

function showData(){
    
    document.getElementById("showUsers").innerHTML="";
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("registerUsers"))?JSON.parse(localStorage.getItem("registerUsers")):[]
    if(user_records)
     {
       for(let i=0;i<user_records.length;i++)
      {
        let addRow=document.createElement('tr');
      addRow.innerHTML= '<tr> <td style="width: 485px;">'+user_records[i].name+'</td> <td style="width: 485px;">'+user_records[i].email+'</td><td><a href = "edit-users.html?id='+user_records[i].id+'">Edit</a> | <a href="delete.html?'+user_records[i].id+'">Delete</a></td> </tr>';
      document.getElementById("showUsers").appendChild(addRow);
  
       }
    }
    }

