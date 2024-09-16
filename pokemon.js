async function fetchPokeData() {
    let url = `https://pokeapi.co/api/v2/pokemon/altaria`;

    //* Activates fetching 
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.stats[4].stat.name);
            displayPokemon(data.sprites.front_shiny);
        })
        .catch(error => {
            console.log(error);
        })
};

fetchPokeData();

 function displayPokemon(pokeImg) {
    let characterTraits = document.querySelector(".characterTraits");
    let imgSrc = document.createElement("img");
    imgSrc.src = pokeImg;
    imgSrc.width = 400;
    imgSrc.height = 400;
    characterTraits.append(imgSrc);
};



