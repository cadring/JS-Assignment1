window.addEventListener("DOMContentLoaded", main);

//Skapar en global variabel för rubrikens textinnehåll för att den ska vara tillgänglig utanför funktionen och inte bara innanför den för att main-funktionen därmed ska kunna komma åt den.
const h2Scene1 = "Headline Scene 1";
const pScene1 = "Text Scene 1";


function main() {
    scene1GlimpseOfTheGreenCat("/images/greencat.jpg", h2Scene1, pScene1);

}

function scene1GlimpseOfTheGreenCat(img, headline, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;

}



