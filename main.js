window.addEventListener("DOMContentLoaded", main);

//Skapar en global variabel för rubrikens textinnehåll för att den ska vara tillgänglig utanför funktionen och inte bara innanför den för att main-funktionen därmed ska kunna komma åt den.
//Beskriv scenerna
const h1Scene0 = "The Fourth Dimension";
//const h2Scene0 = "Game title";
const pScene0 = "Plot";
const imgScene0 = "/images/hourglass.jpeg";

const h2Scene1 = "Headline Scene 1";
const pScene1 = "Text Scene 1";
const imgScene1 = "/images/greencat.jpg";

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
//Ändra knapparna?
//Hur kan man förbättra scen-funktionerna och återanvända dom? CHECK! :D
//Hur kan man förbättra knapp-funktionerna och återanvända dom? CHECK! :D
//Knapparna funkar att trycka på nu efter att dom lades in i en funktion så de inte anropas direkt när main körs, utan först när man klickat. 

function main() {
    //scene1GlimpseOfTheGreenCat();
    scene0TheBeginning();
}

function scene0TheBeginning() {
    loadSceneContent(imgScene0, h1Scene0, pScene0); 

    loadLeftButton(); //Ta bort knapp
    loadRightButton(scene1GlimpseOfTheGreenCat, "Begin");
}

function scene1GlimpseOfTheGreenCat() {

    loadSceneContent(imgScene1, h2Scene1, pScene1);

    loadLeftButton(scene2WatchingTv, "Ignore what you just heard and continues to watch tv"); 
    loadRightButton(scene3Rabbithole, "Go outside and follow what you now understand is a green cat named Alphaba. Alphaba leads you to a rabbithole, you then enter the rabbithole");
}

function scene2WatchingTv() {

    loadSceneContent(imgScene2, h2Scene2, pScene2);

    loadLeftButton(scene4Collapse, "Can't stand to hear about this anymore, they must be exaggerating you say to yourself and decides ignore the information"); 
    loadRightButton(scene3Rabbithole, "You takes the message seriously and decides to go out and follow what you think might be a green cat");
}

function scene3Rabbithole() {
    loadSceneContent(imgScene3, h2Scene3, pScene3);

    loadLeftButton(scene2WatchingTv, "Regret ever coming here and goes back home to watch tv"); 
    loadRightButton(scene5PlanetA, "Solve the riddle and enter the portal to planet Alvograth");
}

function scene4Collapse() {
    loadSceneContent(imgScene4, h2Scene4, pScene4);
    //Göra så att det bara finns en knapp (restart) här som leder till main page (som ännu ej är skapad)
    loadLeftButton(); 
    loadRightButton(scene0TheBeginning, Restart);
}

function scene5PlanetA() {
    loadSceneContent(imgScene5, h2Scene5, pScene5);

    loadLeftButton(scene2WatchingTv, "Gives up and goes home"); 
    loadRightButton(scene6SearchItems, "Begins the search for the needed items");
}

function scene6SearchItems() {
    loadSceneContent(imgScene6, h2Scene6, pScene6);

    loadLeftButton(scene4Collapse, "Hesitates and wants to give up and go back home"); 
    loadRightButton(scene7TheMaze, "Enters the maze");
}

function scene7TheMaze() {
    loadSceneContent(imgScene7, h2Scene7, pScene7);

    loadLeftButton(scene4Collapse); //Ta bort knapp, endast ett val i denna scen
    loadRightButton(scene8DigForSubstance);
}

function scene8DigForSubstance() {
    loadSceneContent(imgScene8, h2Scene8, pScene8);

    loadLeftButton(scene2WatchingTv, "Hope this is the way back, because you just want to give up and go home"); 
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
    loadLeftButton(scene4Collapse); //Knapp ska tas bort, Restart-knapp på slutet som leder till scen0?
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
/*function loadScene0Content(img, title, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h1 = document.getElementById("game-title");
    h1.textContent = title;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;
}*/ //Denna funktion verkar köra över den under och då hänger titeln med i övriga scener, funkar därför ej

function loadSceneContent(img, title, headline, paragraph) {    
    const image = document.getElementById("background-img");
    image.src = img;

    const h1 = document.getElementById("game-title"); //La in h1-element i html, lagt in title i funktionen loadSceneContent samt lagt in en global variabel const h1Scene0 = "Game title", detta verkar funka :D
    h1.textContent = title;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;
}

//Skapat en funktion för vä och höger-knappen, där det nu räcker med att endast i inputen skriva vilken scen man vill ladda, detta genom att funktionen enterScene laddar in vald scen precis som tidigare.
function loadLeftButton(toScene, text) {
    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = toScene;
    buttonLeft.textContent = text;
}

function loadRightButton(toScene, text) {
    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = toScene;
    buttonRight.textContent = text;

    }

/*function loadLeftButton(toScene, text) {
    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene() {
        toScene();
}

function loadRightButton(toScene) {
    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene() {
        toScene();
    };
}*/

/*Kod innan function loadSceneContent och loadLeftButton och loadRightButtonsamt kod innan jag la till h1 i scene0:
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



