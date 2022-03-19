// dopo svariati tentativi, provo a ricopiare l'esercizio pari pari
// ora funziona tutto


let mails = ["bobo@mail.com", "gesu@mail.com", "silvia@mail.com"];

let tuaEmail = prompt("inserisci la tua email");


let mailTrovata = false;

for (y = 0; y < mails.length; y++) {

    if( mails[y] == tuaEmail) {
        mailTrovata = true;
    }

}

if (mailTrovata == true) {
    document.getElementById("stampa").innerHTML = `<p>La tua email è presente</p>`;
}

else  {
    document.getElementById("stampa").innerHTML = `<p>La tua email non è presente</p>`;
}



// console.log(email[0])

// console.log(email[1])

// console.log(email[2])

// devo creare un programma che ad ogni ciclo verifichi se il prompt è uguale a una delle email

// for (var i = 0; i < email.length; i++) {
//     if (domanda == email[i]) {
//         let risultato = "vero";
//         console.log(risultato)
       
//     }

//     else {
//         let risultato = "falso";
//         console.log(risultato)
//     }

    
// } non funziona, proviamo a cambiarlo

// for (var i = 0; i < email.length; i++) {
//     if (domanda == email[i]) {
//         let risultato = "vero";
//         console.log(risultato)

//     }

//     else {
//     }

//     if (risultato == "vero") {
//       let  risposta = "L'email è nella lista"
//     }

//     else {
//         let risposta = "L'email non è nella lista"
//     }

//     console.log(risposta)

// } tentativo 2 non funziona

// guardando dalle soluzioni