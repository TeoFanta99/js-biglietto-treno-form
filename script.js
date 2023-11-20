// STEP 1: SELEZIONE DEI DATI - in questa fase andiamo a individuare gli elementi HTML su cui vogliamo lavorare

// dati utente: nome e cognome, chilometraggio ed età 
const inputName = document.getElementById("username");
const inputKm = document.getElementById("kilometers");
const inputAge = document.getElementById("age");

//bottone che genera i dati
const sendButton = document.getElementById("send");

//bottone che ripulisce i dati
const resetButton = document.getElementById("reset");



// STEP 2: DICHIARAZIONE DELLE VARIABILI - in questa fase andiamo a dichiarare le variabili

let userName;
let userKm;
let userAge;
let ticketPrice;
let finalPrice;



// STEP 3: BOTTONE CHE GENERA I DATI - in questa fase lavoriamo sul bottone "genera"

sendButton.addEventListener("click",

    function () {

        // in questa fase vado ad associare ogni variabile ai dati selezionati nello step 1
        userName = inputName.value;
        userKm = parseInt(inputKm.value);
        userAge = parseInt(inputAge.value);

        // debug tramite console
        console.log("nome: ", userName);
        console.log("n di km: ", userKm);
        console.log("età: ", userAge);

        ticketPrice = 0.21*userKm;

        if (userAge < 18) {
            finalPrice = ticketPrice - ((ticketPrice / 100) * 20);
        } else if (userAge >= 65) {
            finalPrice = ticketPrice - ((ticketPrice / 100) * 40);
        } else {
            finalPrice = ticketPrice;
        }


        // Output - risultato in pagina
        document.getElementById("prezzo-del-biglietto").innerHTML = `Il costo del tuo biglietto è di: ${finalPrice} €`;

    }

);



// STEP 4: BOTTONE CHE RIPULISCE I DATI - in questa fase lavoriamo sul bottone "pulisci"
const container = document.querySelector(".container");

resetButton.addEventListener("click", 

    function () {
        container.classList.remove("active");
    }

)
