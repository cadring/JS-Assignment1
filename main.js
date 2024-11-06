window.addEventListener("DOMContentLoaded", main);

/**Skapar globala variabler så att dessa ska vara tillgängliga utanför 
funktionen och inte bara innanför den för att main-funktionen därmed ska kunna komma åt dem.*/
const h1Scene0 = "The Fourth Dimension";
//const h2Scene0 = "Headline Scene 0"; ev inte ha med i scen0
const pScene0 = "The world is under the threath of an apocalypse. Humans have been draining the world from it's resources, causing a slow destruction of nature. Despite Mother Earth's warnings, humans have not yet been listening to her words. Mother Earth is incarnated through The Tree of life and holds the power of the Fourth Dimension, the dimension of time. Mother Earth created time in order to make the world a habitual place for nature and it's creatures since a timeless world is impossible to live in. Time gives nature a course and the ability to progress and give and hold life. Without time there would be no events, no cause, no effect, no course. Nothing would be able to change or progress, there would be no before nor after. Causality would collapse and therefore time and life itself, beacuse nothing would have a meaning and the world would be stuck in a static condition. As a result all living creatures would be put in this static condition, with no ability to experience existence. Thus, we wouldn't know if we're existing or not, we would be stuck in a frozen moment, stuck in timelessness. The existence of earth is crucial for the existence of the universe as a whole, since earth is working as a lifeforcer and a balancer in the universe. Man's draining of the world and its resources has caused an imbalance in universe. This cause of imbalance has made the universe increase its acceleration leading to a change in the speed of which universe is normally expanding at. These changes in how universe is expanding has led to to changes in how spacetime curves. The Tree of Life which holds the power of The Fourth Dimension, is forced to resort to its last defence, by slowly create more and more extreme weather on earth, slowly making it more and more inhabituable to stop people from destructing it and therefore destruct all life. Do you dare to try to save the World?";
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

//TO DO:
//Lägga till en array, men hur? const listOfSceneContentScene1 = [h2Scene1, pScene1, imgScene1];
//Skapa main-page = Scene0 CHECK!
//Endast en knapp på main page och slutsidorna CHECK!
//Hur kan man förbättra scen-funktionerna och återanvända dom? CHECK! :D
//Hur kan man förbättra knapp-funktionerna och återanvända dom? CHECK! :D
//Ha med ljud eller video nånstans?
//Plocka upp och bära föremål, men hur?
//Förändringar ska sparas till Local Storage så användaren kan fortsätta efter en reload.
//Alla globala funktioner, listor och objekt är strukturerade och namngivna väl samt dokumenterade med JS-doc.
//Lägga in min textfil med handlingen i ett Word-dok. 
//Skriva README
//Styling
//Hur gör man styckeindelning i texten som lagts in i js?

function main() {
    scene0TheBeginning();
}

function scene0TheBeginning() {
    loadSceneContent(imgScene0, h1Scene0, pScene0); 

    loadLeftButton();
    loadRightButton(scene1GlimpseOfTheGreenCat, "Begin");
    changeButtonVisibility(false, true);
}

function scene1GlimpseOfTheGreenCat() {

    loadSceneContent(imgScene1, h2Scene1, pScene1);

    loadLeftButton(scene2WatchingTv, "Ignore what you just heard and continues to watch tv"); 
    loadRightButton(scene3Rabbithole, "Go outside and follow what you now understand is a green cat named Alphaba. Alphaba leads you to a rabbithole, you then enter the rabbithole");
    changeButtonVisibility(true, true);
}

function scene2WatchingTv() {

    loadSceneContent(imgScene2, h2Scene2, pScene2);

    loadLeftButton(scene4Collapse, "Can't stand to hear about this anymore, they must be exaggerating you say to yourself and decides ignore the information"); 
    loadRightButton(scene3Rabbithole, "You takes the message seriously and decides to go out and follow what you think might be a green cat");
    changeButtonVisibility(true, true);
}

function scene3Rabbithole() {
    loadSceneContent(imgScene3, h2Scene3, pScene3);

    loadLeftButton(scene2WatchingTv, "Regret ever coming here and goes back home to watch tv"); 
    loadRightButton(scene5PlanetA, "Solve the riddle and enter the portal to planet Alvograth");
    changeButtonVisibility(true, true);
}

function scene4Collapse() {
    loadSceneContent(imgScene4, h2Scene4, pScene4);
    
    loadLeftButton(); 
    loadRightButton(scene0TheBeginning, "Restart");
    changeButtonVisibility(false, true);
}

function scene5PlanetA() {
    loadSceneContent(imgScene5, h2Scene5, pScene5);

    loadLeftButton(scene2WatchingTv, "Gives up and goes home"); 
    loadRightButton(scene6SearchItems, "Begins the search for the needed items");
    changeButtonVisibility(true, true);
}

function scene6SearchItems() {
    loadSceneContent(imgScene6, h2Scene6, pScene6);

    loadLeftButton(scene4Collapse, "Hesitate and want to give up and go back home"); 
    loadRightButton(scene7TheMaze, "Enter the maze");
    changeButtonVisibility(true, true);
}

function scene7TheMaze() {
    loadSceneContent(imgScene7, h2Scene7, pScene7);

    loadLeftButton(); 
    loadRightButton(scene8DigForSubstance, "You start to dig");
    changeButtonVisibility(false, true);
}

function scene8DigForSubstance() {
    loadSceneContent(imgScene8, h2Scene8, pScene8);

    loadLeftButton(scene2WatchingTv, "Hope this is the way back because you just want to give up and go home"); 
    loadRightButton(scene9BackToEarth, "Follow Alphaba into the portal");
    changeButtonVisibility(true, true);

}
function scene9BackToEarth() {
    loadSceneContent(imgScene9, h2Scene9, pScene9);

    loadLeftButton(); 
    loadRightButton(scene10TreeOfLife, "Finish planting the Stellarplankton in The Tree of Life");
    changeButtonVisibility(false, true);
}

function scene10TreeOfLife() {
    loadSceneContent(imgScene10, h2Scene10, pScene10);

    loadLeftButton();
    loadRightButton(scene0TheBeginning, "Back to main page");
    changeButtonVisibility(false, true);
}

function loadSceneContent(img, title, headline, paragraph) {    
    const image = document.getElementById("background-img");
    image.src = img;

    const h1 = document.getElementById("game-title");
    h1.textContent = title;

    const h2 = document.getElementById("scene-headline");
    h2.textContent = headline;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;
}
/**Förklaring function loadSceneContent
Jag har skapat en variabel som heter image och tilldelar den värdet samma som html-filens element background-img genom att document.getElementById
Med image tar man attributet src och ändrar det till img som är den första inputen till funktionen loadSceneContent.
Upprepar detta på resten av html-elementen och skapar en gemensam funktion som sen går att kalla på istället för att skriva ut all text 
nedan i varje scen-funktion.
Förklaring const h1:
La in h1-element i html, lagt in title i funktionen loadSceneContent samt lagt in en global 
variabel const h1Scene0 = "Game title", och detta verkar funka till skillnad från tidigare kod, se TESTKOD SOM INTE FUNKAT
 */

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
/**Förklaring function loadLeftButton
Skapat en funktion för vä och höger-knappen, där det nu räcker med att endast i inputen skriva vilken scen man vill ladda, 
detta genom att funktionen enterScene laddar in vald scen precis som tidigare.
 */

function changeButtonVisibility(showLeftButton, showRightButton) {
    const buttonLeft = document.getElementById("buttonLeft");   
    const buttonRight = document.getElementById("buttonRight");

    if (buttonLeft) {                                       
        if (showLeftButton) {
            buttonLeft.classList.remove("hide-button");     
        } else {
            buttonLeft.classList.add("hide-button");        
        }
    }

    if (buttonRight) {
        if (showRightButton) {
            buttonRight.classList.remove("hide-button");
        } else {
            buttonRight.classList.add("hide-button");
        }
    }
}

/**Förklaring function changeButtonVisibility()
Skapat en klass i CSS som heter .hide-button satt på display: none. 
Om buttonLeft, om den ska visas (showLeftButton) dvs påståendet är = sant, ta då bort .hide.button
Annars om inte showLeftButton då är påståendet = falskt, lägg till .hide.button
updateButtonVisibility(true, true); = Visar båda knapparna
updateButtonVisibility(true, false); = Visar endast vänster
updateButtonVisibility(false, true); = Visar endast höger
updateButtonVisibility(true, true); = Döljer knapparna
*/

/**Om tid blir över jobba vidare på denna
function inputAnswerToRiddle() {
    const answerRiddle = document.createElement("INPUT");
    answerRiddle.setAttribute("type", "text");
    document.body.appendChild(answerRiddle);
}*/

/**GAMMAL KOD SOM UPPDATERATS:
Gamla koden för function loadButton...
function loadLeftButton(toScene, text) {
    const buttonLeft = document.getElementById("buttonLeft");
    buttonLeft.onclick = function enterScene() {
        toScene();
}
function loadRightButton(toScene) {
    const buttonRight = document.getElementById("buttonRight");
    buttonRight.onclick = function enterScene() {
        toScene();
    };
function enterScene skapades då knapparna först inte funkade att trycka på då det kördes direkt i main och inte när användaren tryckte på dem. 
}

Kod innan function loadSceneContent och loadLeftButton och loadRightButtonsamt kod innan jag la till h1 i scene0:
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

/**TESTKOD SOM INTE FUNKAT
Denna funktion verkar köra över den under och då hänger titeln med i övriga scener, funkar därför ej
function loadScene0Content(img, title, paragraph) {
    const image = document.getElementById("background-img");
    image.src = img;

    const h1 = document.getElementById("game-title");
    h1.textContent = title;

    const p = document.getElementById("scene-paragraph");
    p.textContent = paragraph;
}*/


