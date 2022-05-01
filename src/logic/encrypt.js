import AES from "crypto-js/aes"

export default function encrypt(){         
    var encrypted = CryptoJS.AES.encrypt(document.getElementById("text").value, document.getElementById("pass").value);   
       document.getElementById("result").innerHTML = encrypted;
       document.getElementById("decrypted").innerHTML = '';
    }        
   
export default function decrypt(){
    var decrypted = CryptoJS.AES.decrypt(document.getElementById("result").innerHTML, document.getElementById("pass").value).toString(CryptoJS.enc.Utf8);
        document.getElementById("decrypted").innerHTML = decrypted;
        document.getElementById("result").innerHTML = '';
    }