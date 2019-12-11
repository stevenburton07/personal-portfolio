import { films } from "../assets/films.js";
import { people } from "../assets/people.js";
import { planets } from "../assets/planets.js";

const mainHeader = document.querySelector("header");
let mainArea = document.querySelector("main");

people.forEach(person => {
  let personDiv = document.createElement("div");
  let name = document.createElement("h3");
  let gender = document.createElement("p");
  let pic = document.createElement("img");

  let charNum = getCharNumber(person.url);

  name.textContent = person.name;
  gender.textContent = person.gender;
  pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

  personDiv.appendChild(name);
  personDiv.appendChild(gender);
  personDiv.appendChild(pic);

  mainArea.appendChild(personDiv);
});

function getCharNumber(charURL) {
  let end = charURL.lastIndexOf("/");
  let charID = charURL.substring(end - 2, end);
  if (charID.indexOf("/") !== -1) {
    return charID.slice(1, 2);
  } else {
    return charID;
  }
}

const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const otherCharacters = people.filter(
  person => (person.gender !== "female") & (person.gender !== "male")
);
const allDivs = Array.from(document.querySelectorAll("div"));

let maleButton = document.createElement("button");
maleButton.textContent = "Male Characters";
maleButton.addEventListener("click", () => {
  femaleCharacters.forEach(character => {
    let matchedDiv = allDivs.find(oneDiv => {
      return oneDiv.firstChild.textContent === character.name;
    });
    matchedDiv.setAttribute("style", "display: none;");
  });
});

let femaleButton = document.createElement("button");
femaleButton.textContent = "Female Characters";
femaleButton.addEventListener("click", () => {
  maleCharacters.forEach(character => {
    let matchedDiv = allDivs.find(oneDiv => {
      return oneDiv.firstChild.textContent === character.name;
    });
    matchedDiv.setAttribute("style", "display: none;");
  });
});

let allButton = document.createElement("button");
allButton.textContent = "All Characters";
allButton.addEventListener("click", () => {
  femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    matchedDiv[0].setAttribute("style", "display: revert");
  });
});

mainHeader.appendChild(maleButton);
mainHeader.appendChild(femaleButton);
mainHeader.appendChild(allButton);
