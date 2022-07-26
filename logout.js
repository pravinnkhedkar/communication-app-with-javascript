var logUser = JSON.parse(localStorage.getItem('loggedInUser'));

var logout=()=>{
    localStorage.removeItem('loggedInUser');
    }
