    // questo è lo script Finale. Ho lasciato anche gli altri per far vedere tutto il percorso




let mails = ["bobo@mail.com", "gesu@mail.com", "silvia@mail.com",];

let bottoneVerifica = document.getElementById("bottoneVerifica");

bottoneVerifica.addEventListener("click",
    function verifica() {
        let emailVerificata = document.getElementById("verificaEmail").value;
       
        let tuaEmail = emailVerificata;

        console.log(tuaEmail)

        let mailTrovata = false;

        for (y = 0; y < mails.length; y++) {

            if (mails[y] == `${tuaEmail}`) {
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





