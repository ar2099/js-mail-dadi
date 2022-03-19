let email = ["bobo@mail.com", "gesu@mail.com", "silvia@mail.com"];

let domanda = prompt("inserisci la tua email");

console.log(domanda)

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

for (var i = 0; i < email.length; i++) {
    if (domanda == email[i]) {
        let risultato = "vero";
        console.log(risultato)

    }

    else {
        let risultato = "falso";
        console.log(risultato)
    }


}

