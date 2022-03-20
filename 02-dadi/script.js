// ANCHOR PRIMA VERSIONE. Questo è la prima versione del codice, che si attiva caricando la pagina.

// let numeroGiocatore = Math.floor(Math.random()*6) +1;
// console.log(numeroGiocatore)

// let numeroComputer = Math.floor(Math.random() * 6) + 1;
// console.log(numeroComputer)

// if (numeroGiocatore > numeroComputer) {
//     document.getElementById("risultatoDadi").innerHTML += "<p>Vince il giocatore.<p>"
// }

// else if (numeroGiocatore < numeroComputer) {
//     document.getElementById("risultatoDadi").innerHTML += "<p>Vince il computer.<p>"
// }

// else {
//     document.getElementById("risultatoDadi").innerHTML += "<p>Il giocatore e il computer sono pari.<p>"
// }

// ANCHOR SECONDA VERSIONE: questa attiva la simulazione con il click

// let bottone = document.getElementById("bottone") ;

// bottone.addEventListener(
//     "click",
//     function() {
//         let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
//         console.log(numeroGiocatore)

//         let numeroComputer = Math.floor(Math.random() * 6) + 1;
//         console.log(numeroComputer)

//         if (numeroGiocatore > numeroComputer) {
//             document.getElementById("risultatoDadi").innerHTML = "<p>Vince il giocatore.<p>"
//         }

//         else if (numeroGiocatore < numeroComputer) {
//             document.getElementById("risultatoDadi").innerHTML = "<p>Vince il computer.<p>"
//         }

//         else {
//             document.getElementById("risultatoDadi").innerHTML = "<p>Il giocatore e il computer sono pari.<p>"
//         }
//     }
// )

// ANCHOR VERSIONE 2.5

let bottone = document.getElementById("bottone");

bottone.addEventListener(
    "click",
    function () {
        let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
        console.log(numeroGiocatore)
        document.getElementById("numero-giocatore").innerHTML = `Numero giocatore: ${numeroGiocatore}`;

        let numeroComputer = Math.floor(Math.random() * 6) + 1;
        console.log(numeroComputer)
        document.getElementById("numero-computer").innerHTML = `Numero computer: ${numeroComputer}`;
        

        if (numeroGiocatore > numeroComputer) {
            document.getElementById("risultatoDadi").innerHTML = "<p>Vince il giocatore.<p>"
            document.getElementById("vg").innerHTML += "<p>W<p>"
            document.getElementById("vc").innerHTML += "<p>L<p>"
        }

        else if (numeroGiocatore < numeroComputer) {
            document.getElementById("risultatoDadi").innerHTML = "<p>Vince il computer.<p>"
            document.getElementById("vc").innerHTML += "<p>W<p>"
            document.getElementById("vg").innerHTML += "<p>L<p>"
        }

        else {
            document.getElementById("risultatoDadi").innerHTML = "<p>Il giocatore e il computer sono pari.<p>"
            document.getElementById("vg").innerHTML += "<p>P<p>"
            document.getElementById("vc").innerHTML += "<p>P<p>"
        }
    }
)



