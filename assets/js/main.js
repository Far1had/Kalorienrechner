// main.js // enterTaste mit Aktion Button verbinden
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkData();
        }
    });
});



function checkData() {
    // Überprüfe, ob die Auswahl für Geschlecht getroffen wurde
    let geschlecht;
    if (document.getElementById('frau').checked) {
        geschlecht = "weiblich";
    } else if (document.getElementById('mann').checked) {
        geschlecht = "männlich";
    } else {
        alert("");
        return;
    }

    // Hole die eingegebenen Werte
    let alter = parseInt(document.getElementById('input-age').value);
    let gewicht = parseInt(document.getElementById('input-width').value);
    let groesse = parseInt(document.getElementById('input-height').value);
    let aktivitaetsLevel = document.getElementById('service').value;

    // Berechne den Grundumsatz nach der Harris-Benedict-Formel
    let grundumsatz;
    if (geschlecht === "weiblich") {
        grundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * groesse) - (4.7 * alter);
    } else {
        grundumsatz = 66.47 + (13.7 * gewicht) + (5 * groesse) - (6.8 * alter);
    }

    // Berechne den Gesamtumsatz mit dem PAL-Faktor
    let palFaktor;
    switch (aktivitaetsLevel) {
        case "faul":
            palFaktor = 1.2;
            break;
        case "gut":
            palFaktor = 1.375;
            break;
        case "mittel":
            palFaktor = 1.55;
            break;
        case "sehr":
            palFaktor = 1.725;
            break;
        case "super":
            palFaktor = 1.9;
            break;
        default:
            alert("Ungültiges Aktivitätslevel.");
            return;
    }

    let gesamtumsatz = grundumsatz * palFaktor;

    // Zeige die Ergebnisse im HTML an
// Grundumsatz
document.getElementById('result-A').textContent = " Grundumsatz - kcal: " + grundumsatz.toFixed(0);
document.getElementById('result-A').style.fontSize = "14px"; 

// Gesamtumsatz
document.getElementById('resultTot-B').textContent = " Gesamtumsatz - kcal: " + gesamtumsatz.toFixed(0);
document.getElementById('resultTot-B').style.fontSize = "14px";

// Zusätzliches Element
document.getElementById('resultTot-C').textContent = "🍇🍌🍓🍉🍟🥙🥗🍗🥓";
document.getElementById('resultTot-C').style.fontSize = "16px"; 

}
