
addEventListener;

let money = 100; 


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



const blnc = document.getElementById('balance');
// let btn = document.addEventListener('click', balance);
if (blnc) {
    blnc.addEventListener('click', () => {
      balance();
      console.log('btn clicked');
    })
}


// function getDeposit(){
//     document.getElementById('deposit');
//     console.log('balance clicked');

// }
function balance(){
    alert(money);
}

const dep = document.getElementById('deposit');
// let btn = document.addEventListener('click', balance);
if (dep) {
    dep.addEventListener('click', () => {
      deposit();
      console.log('deposit clicked');
    })
}


function deposit(){
    let deposit = prompt("How much would you like to deposit?");
    let depositInt = parseInt(deposit);
    money = money + depositInt; 
    alert(money);
    // document.getElementById("deposit").innerHTML = money.deposit;
}


const withd = document.getElementById('withdraw');
// let btn = document.addEventListener('click', balance);
if (withd) {
    withd.addEventListener('click', () => {
      withdraw();
      console.log('withdraw clicked');
    })
}

function withdraw(){
    let withdraw = prompt("How much would you like to withdraw?");
    let withdrawtInt = parseInt(withdraw);
    money = money - withdrawtInt; 
    alert(money);

}