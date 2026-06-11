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
    if (num == 67) {
        document.getElementById("result").textContent = "Ha, ha 67 heel grappig hoor.";
    } else if (num > 0 && num < 3) {
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
    zes7()
}

function warmer() {
    warmth += 1;

    document.getElementById("temperatuur").textContent = warmth + " graden Celcius";
    zes7()
}

function zes7() {
    if (warmth == 67) {
        document.getElementById("temperatuur").textContent = "Niet grappig.";
    }
}

function zoekpersoon() {
    let persoon = document.getElementById("persooninput").value;

    let img = document.getElementById("OverOnsimg");

    let game = document.getElementById("SecretGame");

    img.width = 700;
    img.height = 400;

    let mensen = ["Allam", "Duke", "Tom", "Tobias"];
    if (persoon == "") {
        document.getElementById("result1").textContent = "Vul iets in.";
        document.getElementById("result2").textContent = "";
        document.getElementById("result3").textContent = "";
        document.getElementById("result4").textContent = "";
        img.width = 0;
        img.height = 0;
        img.src = "";
    } else if (persoon == 67) {
        document.getElementById("result1").textContent = "Ahum, ahum ahum. 67 zit niet in het team.";
        document.getElementById("result2").textContent = "Vul alsublieft iemand anders in.";
        document.getElementById("result3").textContent = "67 is niet meer grappig.";
        document.getElementById("result4").textContent = "";
        img.width = 0;
        img.height = 0;
        img.src = "";
    } else if (persoon == "HollowKnightIsGreat!") {
      document.getElementById("result1").textContent = "Goed zo.";
      document.getElementById("result2").textContent = "";
      document.getElementById("result3").textContent = "";
      document.getElementById("result4").textContent = "";
      game.src= "https://itch.io/embed-upload/16202222?color=b95b33";
      game.width="1000";
      game.height="570";
      img.width = 0;
      img.height = 0;
      img.src = "";
    } else if (!mensen.includes(persoon)) {
        document.getElementById("result1").textContent = "Vul alstublieft een van ons in. (Allam, Duke, Tobias of Tom)";
        document.getElementById("result2").textContent = "";
        document.getElementById("result3").textContent = "";
        document.getElementById("result4").textContent = "";
        img.width = 0;
        img.height = 0;
        img.src = "";
    } else {
        if (persoon === "Allam") {
            document.getElementById("result1").textContent = "Samen met Duke zorgt Allam voor de 3d modellen en 'Decoratie' van het huis.";
            document.getElementById("result2").textContent = "Allam heeft bijvoorbeeld de bedkast gemaakt.";
            document.getElementById("result3").textContent = "De kast die om kan vallen om een bed te worden.";
            document.getElementById("result4").textContent = "Verder waren de fruit kom en de stoelen ook van hem.";
            img.src = "img/Allam";
        }
        if (persoon === "Duke") {
            document.getElementById("result1").textContent = "Samen met Allam zorgt Duke voor de 3d modellen en 'Decoratie' van het huis.";
            document.getElementById("result2").textContent = "Duke was ook zo aardig om zijn 3d-printer beschikbaar te stellen voor dit project.";
            document.getElementById("result3").textContent = "Hierdoor was het een stuk makelijker om alles te printen.";
            document.getElementById("result4").textContent = "";
            img.src = "img/Duke.jpg";
        }

        if (persoon === "Tom") {
            document.getElementById("result1").textContent = "Tom heeft het hele 'smart' deel gemaakt.";
            document.getElementById("result2").textContent = "Dit betekent dat hij alle functies van het huis heeft gemaakt.";
            document.getElementById("result3").textContent = "Voor dit heeft hij de microbit gebruikt.";
            document.getElementById("result4").textContent = "Ook heeft hij de doos in elkaar gezet.";
            img.src = "img/Tom.jpeg";
        }

        if (persoon === "Tobias") {
            document.getElementById("result1").textContent = "Tobias is de maker en designer van deze wesbsite.";
            document.getElementById("result2").textContent = "Hij heeft alles gemaakt in verband met de website en is verantwoordelijk voor de website.";
            document.getElementById("result3").textContent = "Voor klachten mail tobiashenrik13@gmail.com. Niet gebruiken voor spam.";
            document.getElementById("result4").textContent = "Voor alle code kunt u naar zijn github profiel: tobiashenrik13-bit.";
            img.src = "img/Tobias.jpg";
            

        }
    }
}
