document.getElementById('getText').addEventListener('click', getTextFunction);


let divWrapper = document.querySelector('.mainDiv')
let repeatingDiv = document.createElement('div');

function getTextFunction() {

    //it clears page everytime this function is exicuted, so, the tabe of countries wouldn't repeat.
    divWrapper.innerHTML = '';
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(response => response.json())
        .then(countries => {
            showCountries(countries);
        })
}

function showCountries(countries) {

     let countryName;
     let countriesCapital;
     let countriesPopulation;
     let countriesFlagImage;
    
    countries.forEach(country => {
       

        repeatingDiv = document.createElement('div');
        repeatingDiv.className = 'repeatingDIV'

        countryName = document.createElement('div')
        countryName.textContent = country.name;

        countriesCapital = document.createElement('div')
        countriesCapital.textContent = country.capital;

        countriesPopulation = document.createElement('div')
        countriesPopulation.textContent = country.population;

        //creating an element 'div' which stores img later, it will be easier to style.
        countriesFlag = document.createElement('div')
         //creating an element 'img' instead of div, to store image
        countriesFlagImage = document.createElement('img')
        countriesFlagImage.setAttribute('src', country.flag);
        countriesFlagImage.setAttribute("width", "200");
        countriesFlagImage.setAttribute("height", "150");

        //appending 
        repeatingDiv.appendChild(countryName);
        repeatingDiv.appendChild(countriesCapital);
        repeatingDiv.appendChild(countriesPopulation);
        countriesFlag.appendChild(countriesFlagImage);
        repeatingDiv.appendChild(countriesFlag)
        divWrapper.appendChild(repeatingDiv);

        //styling function is exicuted each time when the forEach runs.
        styling()

    })
}

function styling() {
    repeatingDiv.style.backgroundColor = 'aliceBlue'
    repeatingDiv.style.border = 'solid'
    repeatingDiv.style.borderColor = 'skyBlue'
    repeatingDiv.style.borderWidth = '2px'
    
    
}