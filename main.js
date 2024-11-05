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

const h2Scene6 = "Headline Scene 6";
const pScene6 = "Text Scene 6";
const imgScene6 = "/images/nesportal.jpg";

const h2Scene7 = "Headline Scene 7";
const pScene7 = "Text Scene 7";
const imgScene7 = "/images/shovel.jpeg";

const h2Scene8 = "Headline Scene 8";
const pScene8 = "Text Scene 8";
const imgScene8 = "/images/stargateportal.jpeg";

const h2Scene9 = "Headline Scene 9";
const pScene9 = "Text Scene 9";
const imgScene9 = "/images/treeoflife2.jpg";

const h2Scene10 = "Headline Scene 10";
const pScene10 = "Text Scene 10";
const imgScene10 = "/images/motherearth1.jpg";

/*const h2Scene11 = "Headline Scene 11";
const pScene11 = "Text Scene 11";
const imgScene11 = "/images/motherearth1.jpg";*/

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
}

function scene2WatchingTv() {

    loadSceneContent(imgScene2, h2Scene2, pScene2);

    loadLeftButton(scene4Collapse); 
    loadRightButton(scene3Rabbithole);
}

function scene3Rabbithole() {
    loadSceneContent(imgScene3, h2Scene3, pScene3);

    loadLeftButton(scene2WatchingTv); 
    loadRightButton(scene5PlanetA);
}

function scene4Collapse() {
    loadSceneContent(imgScene4, h2Scene4, pScene4);

    //Göra så att det bara finns en knapp här som leder till main page (som ännu ej är skapad)
}

function scene5PlanetA() {
    loadSceneContent(imgScene5, h2Scene5, pScene5);

    loadLeftButton(scene2WatchingTv); 
    loadRightButton(scene6SearchItems);
}

function scene6SearchItems() {
    loadSceneContent(imgScene6, h2Scene6, pScene6);

    loadLeftButton(scene2WatchingTv); 
    loadRightButton(scene4Collapse);
}

function scene7TheMaze() {
    loadSceneContent(imgScene7, h2Scene7, pScene7);

    loadLeftButton(scene4Collapse); //Ta bort knapp, endast ett val i denna scen
    loadRightButton(scene8DigForSubstance);
}

function scene8DigForSubstance() {
    loadSceneContent(imgScene8, h2Scene8, pScene8);

    loadLeftButton(scene2WatchingTv); 
    loadRightButton(scene9BackToEarth);

}
function scene9BackToEarth() {
    loadSceneContent(imgScene9, h2Scene9, pScene9);

    loadLeftButton(scene4Collapse); //Knapp ska tas bort
    loadRightButton(scene10TreeOfLife);
}

function scene10TreeOfLife() {
    loadSceneContent(imgScene10, h2Scene10, pScene10);
    //Göra så att det bara finns en knapp här som leder till sista scenen.
    loadLeftButton(scene4Collapse); //Knapp ska tas bort
    loadRightButton(scene10TreeOfLife);
}



/*function scene11TheFinalQuest() {
    loadSceneContent(imgScene11, h2Scene11, pScene11);

    loadLeftButton(scene4Collapse); //Ska tas bort
    loadRightButton(scene11TheFinalQuest);
    //Göra så att det bara finns en knapp här som leder till main-paige (ännu ej är skapad).
}*/


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

/*Kod innan function loadSceneContent och loadLeftButton och loadRightButton:
function scene2WatchingTv() {

    function loadSceneContent(img, headline, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;

    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene4Collapse() {
        scene4Collapse();
    };

    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene3Rabbithole() {
        scene3Rabbithole();
    };
}*/



