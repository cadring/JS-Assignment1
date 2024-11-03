window.addEventListener("DOMContentLoaded", main);

//Skapar en global variabel för rubrikens textinnehåll för att den ska vara tillgänglig utanför funktionen och inte bara innanför den för att main-funktionen därmed ska kunna komma åt den.
//Beskriv scenerna
const h2Scene1 = "Headline Scene 1";
const pScene1 = "Text Scene 1";
const imgScene1= "/images/greencat.jpg";

const h2Scene2 = "Headline Scene 2";
const pScene2 = "Text Scene 2";
const imgScene2 = "/images/watchingtv.jpg";

const h2Scene3 = "Headline Scene 3";
const pScene3 = "Text Scene 3";
const imgScene3 = "/images/rabbithole.jpeg";

const h2Scene4 = "Headline Scene 4";
const pScene4 = "Text Scene 4";
const imgScene4 = "/images/skull.jpg";

const h2Scene5 = "Headline Scene 5";
const pScene5 = "Text Scene 5";
const imgScene5 = "/images/planetportal.jpg";

//Lägga till en array, men hur? const listOfSceneContentScene1 = [h2Scene1, pScene1, imgScene1];
//Skapa main-page
//Endast en knapp på main page och slutsidorna
//Hur kan man förbättra scen-funktionerna och återanvända dom? CHECK! :D
//Hur kan man förbättra knapp-funktionerna och återanvända dom? CHECK! :D
//Knapparna funkar att trycka på nu efter att dom lades in i en funktion så de inte anropas direkt när main körs, utan först när man klickat. 


function main() {
    scene1GlimpseOfTheGreenCat();
}

function scene1GlimpseOfTheGreenCat() {

    loadSceneContent(imgScene1, h2Scene1, pScene1);

    loadLeftButton(scene2WatchingTv); 
    loadRightButton(scene3Rabbithole);

    /*const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene2WatchingTv() {
        scene2WatchingTv();
    };

    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene3Rabbithole() {
        scene3Rabbithole();
    };*/
}

function scene2WatchingTv() {

    loadSceneContent(imgScene2, h2Scene2, pScene2);

    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene4Collapse() {
        scene4Collapse();
    };

    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene3Rabbithole() {
        scene3Rabbithole();
    };
}

function scene3Rabbithole() {
    loadSceneContent(imgScene3, h2Scene3, pScene3);

    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene2WatchingTv() {
        scene2WatchingTv();
    };

    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene5PlanetA() {
        scene5PlanetA();
    };
}

function scene4Collapse() {
    loadSceneContent(imgScene4, h2Scene4, pScene4);

    //Göra så att det bara finns en knapp här som leder till main page (som ännu ej är skapad)
}

function scene5PlanetA() {
    loadSceneContent(imgScene5, h2Scene5, pScene5);

    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene2WatchingTv() {
        scene2WatchingTv();
    };

    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene6TheMaze() {
        scene6TheMaze();
    };
}

//Skapat en variabel som heter image och tilldelar den värdet samma som html-filens element background-img genom att document.getElementById
//Med image tar man attributet src och ändrar det till img som är den första inputen till funktionen loadSceneContent.
//Upprepar detta på resten av html-elementen och skapar en gemensam funktion som sen går att kalla på istället för att skriva ut all text nedan i varje scen-funktion. 
function loadSceneContent(img, headline, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;
}

//Skapat en funktion för vä och höger-knappen, där det nu räcker med att endast i inputen skriva vilken scen man vill ladda, detta genom att funktionen enterScene laddar in vald scen precis som tidigare.
function loadLeftButton(toScene) {
    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene() {
        toScene();
    };      
}

function loadRightButton(toScene) {
    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene() {
        toScene();
    };
}





