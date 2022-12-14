let genEl = document.getElementById("gen-el")
let passwordOneEl = document.getElementById("input-el")
let passwordTwoEl = document.getElementById("input2-el")
let passwordLength = 15

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomIndexOne = Math.floor( Math.random() * characters.length ) + characters

function generatePassword() {
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    for (let i = 0; i < passwordLength; i++){
        let passwordOne = Math.floor(Math.random() * characters.length)
        let passwordTwo = Math.floor(Math.random() * characters.length)
        passwordOneEl.textContent += characters[passwordOne]
        passwordTwoEl.textContent += characters[passwordTwo]
    }
}

// console.log (generatePassword())
