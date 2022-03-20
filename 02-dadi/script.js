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

let bottone = document.getElementById("bottone") ;

bottone.addEventListener(
    "click",
    function() {
        let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
        console.log(numeroGiocatore)

        let numeroComputer = Math.floor(Math.random() * 6) + 1;
        console.log(numeroComputer)

        if (numeroGiocatore > numeroComputer) {
            document.getElementById("risultatoDadi").innerHTML = "<p>Vince il giocatore.<p>"
        }

        else if (numeroGiocatore < numeroComputer) {
            document.getElementById("risultatoDadi").innerHTML = "<p>Vince il computer.<p>"
        }

        else {
            document.getElementById("risultatoDadi").innerHTML = "<p>Il giocatore e il computer sono pari.<p>"
        }
    }
)



