const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passwordLength = 15;
const btn = document.getElementById("btn");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2")

btn.addEventListener("click", () => {
        pass1.textContent = "";
        pass2.textContent = "";
        for (let i = 0; i < passwordLength; i++){
            let randomIndex1 = Math.floor(Math.random() * characters.length);
            let randomIndex2 = Math.floor(Math.random() * characters.length);
            pass1.textContent += characters[randomIndex1];
            pass2.textContent += characters[randomIndex2]
        }
        
    
})




