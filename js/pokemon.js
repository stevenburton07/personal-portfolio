async const allPokemon = (() => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const myJson = await response.json();
  console.log(JSON.stringify(myJson));
})

console.log(allPokemon().then)

/* people.forEach(person => {
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
  }); */