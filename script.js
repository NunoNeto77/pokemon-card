let click = document.querySelector(".click");
let list = document.querySelector(".list");
let arrow = document.querySelector(".arrow");
let links = document.getElementsByClassName("links");
let pokemonName = document.querySelector(".pokemonName");
const pokemonCard = document.querySelector(".pokemonCard");
const pokemonImage = document.querySelector(".pokemonImage");
const type = document.querySelector(".type");

const hpValue = document.querySelector(".hpValue");
const attackValue = document.querySelector(".attackValue");
const defenseValue = document.querySelector(".defenseValue");
const specialAttackValue = document.querySelector(".specialAttackValue");
const specialDefenseValue = document.querySelector(".specialDefenseValue");
const speedValue = document.querySelector(".speedValue");
const heightValue = document.querySelector(".heightValue");
const weightValue = document.querySelector(".weightValue");
const abilityValue = document.querySelector(".abilityValue");
const hiddenAbilityValue = document.querySelector(".hiddenAbilityValue");

// to show the options when you click on the dropdown
click.addEventListener("click", () => {
  list.classList.toggle("newList");
  arrow.classList.toggle("rotate");
});

// pra aparecer em cima a option selecionada e para a mesma ficar com cor diferente das outras
for (option of links) {
  option.addEventListener("click", function () {
    let text = this.innerText;

    arrow.classList.toggle("rotate");
    this.style.backgroundColor = "rosybrown";
    // to put the selectioned option on the button (click)
    click.childNodes[0].nodeValue = text;

    for (option of links) {
      if (click.childNodes[0].nodeValue != option.innerText) {
        option.style.backgroundColor = "rgb(250, 193, 203)";
      }
    }
    list.classList.toggle("newList");

    // to get the pokemon and his informations
    let pokemon = click.childNodes[0].nodeValue;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        changePokemonCardColor(data.name);

        pokemonImage.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}"/>`;
        type.innerHTML = `${data.types[0].type.name}`;
        pokemonName.innerHTML = `${data.name}`;

        hpValue.innerHTML = `${data.stats[0].base_stat}`;

        attackValue.innerHTML = data.stats[1].base_stat;
        defenseValue.innerHTML = data.stats[2].base_stat;
        specialAttackValue.innerHTML = data.stats[3].base_stat;
        specialDefenseValue.innerHTML = data.stats[4].base_stat;

        speedValue.innerHTML = data.stats[5].base_stat;
        heightValue.innerHTML = `${data.height}`;
        weightValue.innerHTML = data.weight;
        abilityValue.innerHTML = data.abilities[0].ability.name;
        hiddenAbilityValue.innerHTML = data.abilities[1].ability.name;
      });
  });
}

// to change the background color of the card depending on pokemon
const changePokemonCardColor = (name) => {
  pokemonCard.background = "none";

  switch (name) {
    case "pikachu":
      pokemonCard.style.background =
        "linear-gradient(110deg, yellow 0%, white 100%)";
      break;

    case "charizard":
      pokemonCard.style.background =
        "linear-gradient(110deg, red 0%, white 100%)";

      break;

    case "blastoise":
      pokemonCard.style.background =
        "linear-gradient(110deg, blue 0%, white 100%)";

      break;

    case "flareon":
      pokemonCard.style.background =
        "linear-gradient(110deg, orange 0%, white 100%)";

      break;

    case "bulbasaur":
      pokemonCard.style.background =
        "linear-gradient(110deg, violet 0%, white 100%)";

      break;

    case "gengar":
      pokemonCard.style.background =
        "linear-gradient(110deg, purple 0%, white 100%)";

      break;

    case "alakazam":
      pokemonCard.style.background =
        "linear-gradient(110deg, pink 0%, white 100%)";

      break;
  }
};
