
addEventListener;

// //create username
let username = prompt("Choose a username.");

// //create a password
let userPass = prompt("Please enter a password.");

//login

let correctLogin = false; 
let userLoginName = prompt("Please enter your username.");
while (correctLogin == false){
    while (userLoginName != username){
        userLoginName = prompt("We don't have an account associated with that username! \nPlease try again.");
    }
    let userLoginPass = prompt("Please enter your password.");
    while (userLoginPass != userPass){
        userLoginPass = prompt("Incorrect password. \nPlease try again.");
    }
    correctLogin = true; 
}




let blnce = document.getElementById('balance');
blnce && blnce.addEventListener('click', balance);


function balance(){
    alert( '$100');
}

function deposit(){
    let deposit = prompt("How much would you like to deposit?");
    alert(deposit);
}

