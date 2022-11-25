
addEventListener;

let money = 100; 
const withd = document.getElementById('withdraw');
const blnc = document.getElementById('balance');
const dep = document.getElementById('deposit');
const chng = document.getElementById('change');
const lgt = document.getElementById('logout');
let correctLogin = false; 
// //create username
let username = prompt("Choose a username.");
// //create a password
let userPass = prompt("Please choose a password.");

//login
login();

function login(){
    correctLogin = false;
    let userLoginName = prompt("Please enter your username.", 'username');
    if (userLoginName){
        while (correctLogin == false){
            while (userLoginName != username){
                userLoginName = prompt("We don't have an account associated with that username! \nPlease try again.");
            }
            let userLoginPass = prompt("Please enter your password.", 'password');
            while (userLoginPass != userPass){
                userLoginPass = prompt("Incorrect password. \nPlease try again.");
            }
            correctLogin = true; 
        }
    }

}


//check balance
if (blnc) {
    blnc.addEventListener('click', () => {
      balance();
      console.log('btn clicked');
    })
}

function balance(){
    if (correctLogin == true){
        alert(`Your balance is ${money}.`);
    }
    else{
        alert('Please login to access this feature.')
    }
}


//deposit money
if (dep) {
    dep.addEventListener('click', () => {
      deposit();
      console.log('deposit clicked');
    })
}

function deposit(){
    if (correctLogin == true){

        let deposit = prompt("How much would you like to deposit?", ')0');
        if(deposit){
            let depositInt = parseInt(deposit);
            money = money + depositInt; 
            alert(`Your balance is now ${money}.`);
        }
        else{
            alert(`Your balance is ${money}.`);
        }
    }
    else{
        alert('Please login to access this feature.')
    }
}

//withdraw money
if (withd) {
    withd.addEventListener('click', () => {
      withdraw();
      console.log('withdraw clicked');
    })
}

function withdraw(){
    if (correctLogin == true){

        let withdraw = prompt("How much would you like to withdraw?", '0');
        if (withdraw){
            let withdrawtInt = parseInt(withdraw);
            money = money - withdrawtInt; 
            alert(`Your balance is now ${money}.`);
        }
        else{
            alert(`Your balance is ${money}.`);
        }
    }
    else{
        alert('Please login to access this feature.')
    }

}

//change username or password
if (chng) {
    chng.addEventListener('click', () => {
      change();
      console.log('change clicked');
    })
}

function change(){
    if (correctLogin == true){

        login();
        let validAnswer = false; 
        if (validAnswer){
            while (validAnswer == false){
                let resp = prompt('Would you like to change your username, password, or both?')
                if (resp){
                    resp = resp.toLowerCase();
                    try {
                        resp == 'username' || 'password' || 'both';
                        validAnswer = true;
                    } catch (error) {
                        alert('Invalid response. Please try again.');
                    }
                    
                    if (resp == 'username'){
                        username = prompt("Choose a new username.");
                        alert('You have successfully changed your username.');
                    }
                    else if (resp == 'password'){
                        userPass = prompt("Please choose a new password.");
                        alert('You have successfully changed your password.');
        
                    }
                    else{
                        username = prompt("Choose a new username.");
                        alert('You have successfully changed your username.');
                        userPass = prompt("Please choose a new password.");
                        alert('You have successfully changed your password.');
                    }
                }
            }
        }
    }
    else{
        alert('Please login to access this feature.')
    }
}

//logout
if (lgt) {
    lgt.addEventListener('click', () => {
      logout();
      console.log('logout clicked');
    })
}
////////add confirm() here;
function logout(){
    if (correctLogin == true){

        alert('You have been logged out.');
        correctLogin = false;
    }
    else{
        alert('Please login to access this feature.')
    }
}