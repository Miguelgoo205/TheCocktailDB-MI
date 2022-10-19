window.addEventListener("DOMContentLoaded", getCocktails);


const api = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const inputSeeker = document.getElementById("search");
const main = document.getElementById("main");
const message = document.getElementById("message")

inputSeeker.addEventListener("keyup", seeker)

function getCocktails() {
    for (let i = 0; i < 15; i++) {
        fetch (api)
        .then(response => response.json())
        .then(data => renderCocktails(data)) 
    }
}

function renderCocktails(data) {
    data["drinks"].map(answer => {

        const card= document.createElement('div')
        card.classList.add('card')


        const title = document.createElement('h2');
        title.textContent= answer["strDrink"];
        title.classList.add('title');


        const imageCocktail = document.createElement('img');
        imageCocktail.setAttribute("src", answer["strDrinkThumb"]);
        imageCocktail.classList.add('image');

        const type = document.createElement('p');
        type.textContent= answer["strCategory"];
        type.classList.add('type');


        card.appendChild(title);
        title.appendChild(type);
        card.appendChild(imageCocktail);
        main.appendChild(card);


        
    })
}


function seeker(event) {
    main.innerHTML= " ";
    let newApi = ' ';
    if (event.target.value === '') {
        getCocktails()
    }
    else{
         newApi = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`;
         fetch(newApi)
         .then(response => response.json())
         .then(data =>  renderCocktails(data))
    }
}