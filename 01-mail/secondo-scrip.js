
let bottoneVerifica = document.getElementById("bottoneVerifica");

bottoneVerifica.addEventListener("click",
    function verifica() {
        
        let mailTrovata = false;

        for (y = 0; y < mails.length; y++) {

            if (mails[y] == tuaEmail) {
                mailTrovata = true;
            }

        }

        if (mailTrovata == true) {
            document.getElementById("stampa").innerHTML = `<p>La tua email è presente</p>`;
        }

        else {
            document.getElementById("stampa").innerHTML = `<p>La tua email non è presente</p>`;
        }
    }

)






let bottoneRegistra = document.getElementById("bottoneRegistra");

bottoneRegistra.addEventListener("click",
    function registrazione() {
        let emailRegistrata = document.getElementById("registraEmail").value;
        console.log(emailRegistrata);
        document.getElementById("elencoEmail").innerHTML += `${emailRegistrata}`;
        return emailRegistrata;

    }

)

registrazione

console.log(registrazione)