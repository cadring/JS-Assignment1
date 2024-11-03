window.addEventListener("DOMContentLoaded", main);

//Skapar en global variabel för rubrikens textinnehåll för att den ska vara tillgänglig utanför funktionen och inte bara innanför den för att main-funktionen därmed ska kunna komma åt den.
const h2Scene1 = "Headline Scene 1";
const pScene1 = "Text Scene 1";
const imgScene1 = "/images/greencat.jpg";

const h2Scene2 = "Headline Scene 2";
const pScene2 = "Text Scene 2";
const imgScene2 = "/images/watchingtv.jpg";

const h2Scene3 = "Headline Scene 3";
const pScene3 = "Text Scene 3";
const imgScene3 = "/images/rabbithole.jpeg";

//Lägga till en array, men hur?
//const listOfSceneContentScene1 = [h2Scene1, pScene1, imgScene1];
//Hur kan man förbättra funktionerna och återanvända dom?

function main() {
    scene1GlimpseOfTheGreenCat("/images/greencat.jpg", h2Scene1, pScene1);
    const buttonLeft = document.getElementById("buttonRight");
    buttonLeft.onclick = function enterScene3WatchingTv() {
        scene2WatchingTv("/images/watchingtv.jpg", h2Scene3, pScene3);
    };

    const buttonRight = document.getElementById("buttonLeft");
    buttonRight.onclick = function enterScene2Rabbithole() {
        scene3Rabbithole("/images/rabbithole.jpeg", h2Scene2, pScene2);
    };

    //Knapparna funkar att trycka på nu efter att dom lades in i en funktion så de inte anropas direkt när main körs, utan först när man klickat. 
}

function scene1GlimpseOfTheGreenCat(img, headline, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;

}

function scene2WatchingTv(img, headline, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;

}

function scene3Rabbithole(img, headline, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;

}






