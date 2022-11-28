addEventListener;

let money = 100; 
const withd = document.getElementById('withdraw');
const blnc = document.getElementById('balance');
const dep = document.getElementById('deposit');
const chng = document.getElementById('change');
const lgt = document.getElementById('logout');
let correctLogin = false; 
let username; 
let userPass;

declare();
login();


function declare(){
    while (username == null || username.length == 0){
       username = prompt("Choose a username.");
    }
    while(userPass == null || userPass.length == 0){
        userPass = prompt("Please choose a password.");
    }
}



function login(){
    correctUser = false;
    correctPass = false;
    while (correctUser == false || correctPass == false){
        correctLogin = false; 
        while(correctUser == false){
            let userLoginName = prompt("Please enter your username.");
            if (userLoginName){
                while (userLoginName != username){
                    userLoginName = prompt("We don't have an account associated with that username! \nPlease try again.");
                }
                
            correctUser = true;
            }
        }

        while (correctPass == false){
            let userLoginPass = prompt("Please enter your password.");
            if (userLoginPass){
                while (userLoginPass != userPass){
                    userLoginPass = prompt("Incorrect password. \nPlease try again.");
                }
            correctPass = true; 
            
            }
        }
        correctLogin = true;
    }
}

function checkUser(){
    let userLoginName = prompt("Please enter your username.");
    while (userLoginName != null && userLoginName.length != 0){
        if (userLoginName){
        userLoginName = prompt("We don't have an account associated with that username! \nPlease try again.");
        }
        if (userLoginName == username){
            return true;
        }
        else{
            return false; 
        }
    }
}

function checkPass(){
    let userLoginPass = prompt("Please enter your password.");
    while (userLoginPass != null && userLoginPass.length != 0){
        if (userLoginPass){
            userLoginPass = prompt("Incorrect password. \nPlease try again.");
        }
        if (userLoginPass == userPass){
            correctPasslocal = true; 
            return true;
        }
    
        else{
            return false; 
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

        let deposit = prompt("How much would you like to deposit?", '0');
        if(deposit){
            let depositInt = parseInt(deposit);
            money = money + depositInt; 
            alert(`Your balance is now ${money}.`);
        }
        else{
            deposit = 0;
            money = money + deposit; 
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
            withdraw = 0;
            money = money - withdraw; 
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
        let usr; 
        let pass;
        usr = checkUser();
        if (usr == true){
            pass = checkPass();

            if (pass == true){
                let validAnswer = false; 
                let resp = prompt('Would you like to change your username, password, or both?');
                if (resp){
                    while (validAnswer == false){
                    
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
                
            
                else{
                alert('Please login to access this feature.')
                }
            }   
        }

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