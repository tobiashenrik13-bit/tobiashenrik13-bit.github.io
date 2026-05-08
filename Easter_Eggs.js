function checkNumber() {
    // Get the value from the input field
    let num = document.getElementById("numberInput").value;

    // Validate input
    if (num === "") {
        document.getElementById("result").textContent = "Vul een nummer in.";
        return;
    }

    // Convert to number type
    num = Number(num);

    // If-else logic
    if (num > 0 && num < 3) {
        document.getElementById("result").textContent = "Jij bent echt facking arm he?";
    } else if (num < 0) {
        document.getElementById("result").textContent = "Probeer jij ons geld te stelen? Daar trap ik niet in!";
    } else if (num < 10) {
        document.getElementById("result").textContent = "HOE DURF JE MIJ ZO WEINIG TE GEVEN!!!!";
    } else if (num < 999) {
        document.getElementById("result").textContent = "GEEF ME MEER!!!";
    } else if (num > 99999999999) {
        document.getElementById("result").textContent = "Je hebt de website gekocht.";
    } else {
        document.getElementById("result").textContent = "Bedankt voor het geld!";
    } 
}
let warmth;

warmth = Number(18);
function colder() {
    warmth -= 1;

    document.getElementById("temperatuur").textContent = warmth + " graden Celcius";
}

function warmer() {
    warmth += 1;

    document.getElementById("temperatuur").textContent = warmth + " graden Celcius";
}