window.addEventListener("DOMContentLoaded", main);

/**Skapar globala variabler så att dessa ska vara tillgängliga utanför 
funktionen och inte bara innanför den för att main-funktionen därmed ska kunna komma åt dem.*/
//const h1Scene0 = "The Fourth Dimension";
const h2Scene0 = "The Fourth Dimension";
const pScene0 = "The world is under the threath of an apocalypse. Humans have been draining the world from it's resources, causing a slow destruction of nature. Despite Mother Earth's warnings, humans have not yet been listening to her words. \n\n Mother Earth is incarnated through The Tree of life and holds the power of the Fourth Dimension, the dimension of time. Mother Earth created time in order to make the world a habitual place for nature and it's creatures since a timeless world is impossible to live in. Time gives nature a course and the ability to progress and give and hold life. Without time there would be no events, no cause, no effect, no course. Nothing would be able to change or progress, there would be no before nor after. Causality would collapse and therefore time and life itself, beacuse nothing would have a meaning and the world would be stuck in a static condition. As a result all living creatures would be put in this static condition, with no ability to experience existence. Thus, we wouldn't know if we're existing or not, we would be stuck in a frozen moment, stuck in timelessness. \n\n The existence of earth is crucial for the existence of the universe as a whole, since earth is working as a lifeforcer and a balancer in the universe. Man's draining of the world and its resources has caused an imbalance in universe. This cause of imbalance has made the universe increase its acceleration leading to a change in the speed of which universe is normally expanding at. These changes in how universe is expanding has led to to changes in how spacetime curves. The Tree of Life which holds the power of The Fourth Dimension, is forced to resort to its last defence, by slowly create more and more extreme weather on earth, slowly making it more and more inhabituable to stop people from destructing it and therefore destruct all life. \n\n Do you dare to try to save the World?";
const imgScene0 = "/images/hourglass.jpeg";

const h2Scene1 = "Glimpse of the Green Cat";
const pScene1 = "You are John, a theoretical physicist student at home watching the news. Once again scientists are warning about changes in the universe where the cosmic background radiation becomes more difficult to measure, which indicates that light particles move more slowly as a result of distortion of spacetime. This is a clear sign that the imbalance on earth has now led to an impact on the entire universe and that the dreaded state of static universe is only a matter of time.\n\nYou are devastated about this. You and your friends from the organization 'Earth for Space - Space for Earth' have worked hard trying to inform and educate the society about the changes that one has to make in order to prevent this catastrophy from happening. Although there are a lot of people willing to make a change, the amount have not been enough. You then glimps something green outside your window and hear the sound of a cat, you decide to:\n\n";
const imgScene1 = "/images/greencat.jpg";

const h2Scene2 = "Watching tv";
const pScene2 = "You find yourself in front of your tv again, watching the news broadcast about the future of Earth, humanity and the universe as a whole. A wave of feelings of apprehensiveness floods over you and you:\n\n";
const imgScene2 = "/images/watchingtv.jpg";

const h2Scene3 = "The rabbithole";
const pScene3 = "Once inside the rabbithole you meet up with the Riddling Rabbit an you're faced with solving this riddle before you and Alphaba can continue. The riddle goes like this and you decide to: \n\n 'I am the parent of civilizations, the killer of heroes. Without me, you cannot survive, but embrace me too much, and you’ll cease to thrive. What am I?'\n\n";
const imgScene3 = "/images/rabbithole.jpeg";

const h2Scene4 = "Collapse of Time";
const pScene4 = "'Ignorance is equal to destruction, the apocalypse is now upon you'\n\n- Mother Earth";
const imgScene4 = "/images/skull.jpg";

const h2Scene5 = "Planet Alvograth";
const pScene5 = "Through a portal that became visible after solving the riddle, you've now entered the desertlike planet Alvograth. You and Alphaba find yourselves in front of the entrance of The Maze of Reflection. Alphaba hands you a letter. The letter is from the Riddling Rabbit and says:\n\n'Once you find what you should be looking for be sure to pick them both up, in the end you will need to collect what you've dug up.'\n\nThe letter then crumbles in your hands and you look confused and:\n\n";
const imgScene5 = "/images/planetportal.jpg";

const h2Scene6 = "The Maze of Reflection";
const pScene6 = "You've found a small casket and a shovel. You keep reapeting the letter from the Riddling Rabbit in your head and repeat out loud:\n\n '...in the end you will need to collect what you've dug up', and say to Alphaba,\n\n-I think we have to enter the maze and dig for something in the end of it, I just hope we'll get to there. You:\n\n";
const imgScene6 = "/images/nesportal.jpg";

const h2Scene7 = "May you find what you're looking";
const pScene7 = "You and Alphaba have reached the end of the maze, while you take a deep sigh of relief at having made it through the maze, the maze closes behind you. On the wall of the maze an image appears that at first looks like water, the image then starts to reflect on the ground in front of you, and you say to Alphaba,\n\n-I think we're supposed to dig here. \n\nWithout nowing what you're searching for: \n\n";
const imgScene7 = "/images/shovel.jpeg";

const h2Scene8 = "The Portal Back";
const pScene8 = "You've found what looks like a green crystal and say,\n\n-It has the same green color as you Alphaba, I think we just found what we 'should be looking for'.\n\nYou put the crystal in the small casket. Alphaba yawns and heads towards of what looks like a portal and you:\n\n";
const imgScene8 = "/images/stargateportal.jpeg";

const h2Scene9 = "The Tree of Life";
const pScene9 = "Once through the portal you find yourself and Alphaba back on Earth. The place seems familiar, yet you don't recall being here before. In front of you stands the most astounding grandious and beautiful tree you've ever witnessed. A warm wind sweeps through and the tree starts to talk,\n\n-I am Mother Earth, incarnated in The Tree of Life. I am the Mother of all living and the protector of The Fourth Dimension.\n\nMother Earth asks Alphaba to hand over an infrared teleskop to you and says,\n\n-Now look through it towards the sky, what do you see John?\n\n-That there seems to be a lot of red light up there, is this the phenomenom of redshift due to the expansion of the universe, ypu aks?\n\n-Indeed it is, Mother Earth replies, this is what happens when the wavelenght of light is being stretched out due to the accelerated expansion of the universe caused by the imbalance of the Earth. The universe has increased its acceleration leading to a change in the speed of which universe is normally expanding at, that is why you see an extreme redshift and that is why time is about to collapse. The crystal you found contains Stellarplankton. This substance has extreme photosynthetical properties and therefore posseses the power of reversing the negative climate effects human has caused the earth, by normalizing the CO2-levels and give nature the chance to heal. This will then slow down the expansion of the universe, normalizing space warp and therefore time. Time will go back being relative and not timeless. But Before this is possible you'll need to plant the Stellarplankton right here in The Tree of Life, then Stellarplankton can unleash its powers.\n\nYou:\n\n";
const imgScene9 = "/images/treeoflife2.jpg";

const h2Scene10 = "Holding the power of The Fourth Dimension";
const pScene10 = "The Stellarplankton has made it possible for The Tree of Life to incapsulate CO2 and make it dissolve. This has made Earth regain its role as a universal balancer. The expansion of the universe is slowing down and space warp is normalizing. The world is no longer being threatened to be put in static timeless condition since The Fourth Dimension is now saved.\nYou did it!\n\n";
const imgScene10 = "/images/motherearth1.jpg";

const shovel = {
  name: "Shovel",
  imgItem: "/images/smallshovel.png",
}

const casket = {
  name: "Casket",
  imgItem: "/images/smallcasket.png",
}

const crystal = {
  name: "Crystal",
  imgItem: "/images/smallcrystal.png",
}

let pickedUpItems = [];
const availableItems = [];

//TO DO:
//Lägga till en array, men hur? const listOfSceneContentScene1 = [h2Scene1, pScene1, imgScene1];
//Skapa main-page = Scene0 CHECK!
//Endast en knapp på main page och slutsidorna CHECK!
//Hur kan man förbättra scen-funktionerna och återanvända dom? CHECK! :D
//Hur kan man förbättra knapp-funktionerna och återanvända dom? CHECK! :D
//Ha med ljud eller video nånstans?

//Plocka upp och bära föremål, men hur? splice modifiera listan, splice = välja items i arrayer via index nummer
//let pickedUpItems = ["bird", "pen", "key"]
//const index = pickedUpItems.indexOf("pen")
//pickedUpItems.splice(index, 1)

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
  loadSceneContent(imgScene0, h2Scene0, pScene0);

  loadLeftButton();
  loadRightButton(scene1GlimpseOfTheGreenCat, "Begin");
  changeButtonVisibility(false, true);
}

function scene1GlimpseOfTheGreenCat() {
  loadSceneContent(imgScene1, h2Scene1, pScene1);

  loadLeftButton(scene2WatchingTv, "Ignore what you just heard and continue to watch tv");
  loadRightButton(scene3Rabbithole, "Go outside and follow what you now understand is a green cat named Alphaba. Alphaba leads you to a rabbithole, you then enter the rabbithole");
  changeButtonVisibility(true, true);
}

function scene2WatchingTv() {
  loadSceneContent(imgScene2, h2Scene2, pScene2);

  loadLeftButton(scene4Collapse, "Can't stand to hear about this anymore, they must be exaggerating you say to yourself and decide to ignore the information");
  loadRightButton(scene3Rabbithole, "Take the message seriously and decide to go out and follow what you think might be a green cat");
  changeButtonVisibility(true, true);
}

function scene3Rabbithole() {
  loadSceneContent(imgScene3, h2Scene3, pScene3);

  loadLeftButton(scene2WatchingTv, "Regret ever coming here and go back home to watch tv");
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

  loadLeftButton(scene2WatchingTv, "Give up and go home");
  loadRightButton(scene6FindWhatYoureLookingFor, "Begin the search for the needed items");
  changeButtonVisibility(true, true);
}

function scene6FindWhatYoureLookingFor() {
  loadSceneContent(imgScene6, h2Scene6, pScene6);

  loadLeftButton(scene4Collapse, "Hesitate and want to give up and go back home");
  loadRightButton(scene7TheMaze, "Enter the maze");
  changeButtonVisibility(true, true);

  pickedUpItems.push("shovel", "casket");
  console.log(pickedUpItems);
  //Här ska man kunna plocka upp the casket and the shovel
}

function scene7TheMaze() {
  loadSceneContent(imgScene7, h2Scene7, pScene7);

  loadLeftButton();
  loadRightButton(scene8PortalBack, "You start to dig");
  changeButtonVisibility(false, true);
}

function scene8PortalBack() {
  loadSceneContent(imgScene8, h2Scene8, pScene8);

  loadLeftButton(scene2WatchingTv, "Hope this is the way back because you just want to give up and go home");
  loadRightButton(scene9TreeOfLife, "Follow Alphaba into the portal");
  changeButtonVisibility(true, true);
  pickedUpItems.push("crystal");
  console.log(pickedUpItems);
  //Här ska man kunna pick up the crystal
}
function scene9TreeOfLife() {
  loadSceneContent(imgScene9, h2Scene9, pScene9);

  loadLeftButton();
  loadRightButton(scene10HoldingThePower, "Finish planting the Stellarplankton in The Tree of Life");
  changeButtonVisibility(false, true);
  pickedUpItems.splice(0, 3);
  console.log(pickedUpItems);
  //Här ska man kunna put down the crystal
}

function scene10HoldingThePower() {
  loadSceneContent(imgScene10, h2Scene10, pScene10);

  loadLeftButton();
  loadRightButton(scene0TheBeginning, "Back to main page");
  changeButtonVisibility(false, true);
}

function loadSceneContent(img, headline, paragraph) {
  const image = document.getElementById("background-img");
  image.src = img;

  //const h1 = document.getElementById("game-title");
  //h1.innerText = title;

  const h2 = document.getElementById("scene-headline");
  h2.innerText = headline;

  const p = document.getElementById("scene-paragraph");
  p.innerText = paragraph;
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
