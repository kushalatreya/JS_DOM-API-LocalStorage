//document.getElementById('getText').addEventListener('click', getCountriesListFunction);

document.querySelector('.search-input').addEventListener('onkeydown', searchFunction )
let divWrapper = document.querySelector('.mainDiv')
let repeatingDiv = document.createElement('div');
let searchInput = document.querySelector('.search-input');

function getCountriesListFunction() {
    //it clears page everytime this function is exicuted, so, the tabe of countries wouldn't repeat.
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(response => response.json())
        .then(countries => {
            document.querySelector('.sort-countries-name').addEventListener('click', () => {

                showCountries(sortCountryName(countries));

            });
            document.querySelector('.reverse-countries-name').addEventListener('click', () => {

                showCountries(sortCountryName(countries).reverse());

            });
            document.querySelector('.sort-capital-name').addEventListener('click', () => {

                showCountries(sortCountryCapital(countries));

            });
            document.querySelector('.reverse-capital-name').addEventListener('click', () => {

                showCountries(sortCountryCapital(countries).reverse());

            });
            document.querySelector('.sort-population-name').addEventListener('click', () => {
                showCountries(sortPopulation(countries));
            });
            document.querySelector('.reverse-population-name').addEventListener('click', () => {
                showCountries(sortPopulation(countries).reverse());
            });            
            //sortPopulation(countries);
            //sortCountryCapital(countries);
            //sortCountryName(countries)
            showCountries(countries);
            searchFunction(countries);
            //forSelf: we create function to save the data from api in the memory location, 
        })
}
getCountriesListFunction()

function showCountries(countries) {
    //it clears page everytime this function is exicuted, so, the tabe of countries wouldn't repeat.

    divWrapper.innerHTML = '';
    let countryName;
    let countriesCapital;

    let countriesPopulation;
    let countriesRegion;
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

        countriesRegion = document.createElement('div')
        countriesRegion.textContent = country.region;

        //creating an element 'div' which stores img later, it will be easier to style.
        //countriesFlag = document.createElement('div')
        //creating an element 'img' instead of div, to store image
        countriesFlagImage = document.createElement('img')
        countriesFlagImage.setAttribute('src', country.flag);
        countriesFlagImage.setAttribute("width", "200");
        countriesFlagImage.setAttribute("height", "150");

        //appending 
        repeatingDiv.appendChild(countryName);
        repeatingDiv.appendChild(countriesCapital);
        repeatingDiv.appendChild(countriesPopulation);
        repeatingDiv.appendChild(countriesRegion);
        // countriesFlag.appendChild(countriesFlagImage);
        repeatingDiv.appendChild(countriesFlagImage);
        //repeatingDiv.appendChild(countriesFlag)
        divWrapper.appendChild(repeatingDiv);

        //styling function is exicuted each time when the forEach runs.
        styling()
    })
}

function styling() {
    // repeatingDiv.style.backgroundColor = 'aliceBlue'
    repeatingDiv.style.border = 'solid'
    repeatingDiv.style.borderColor = 'skyBlue'
    repeatingDiv.style.borderWidth = '2px'
}

//forSelf: it is not possible to access the data directly, using console.log, we have to use loop to 
//specify what exactly we are working .

function sortPopulation(countries) {
    const sortedPopulation = countries.sort((a, b) => a.population - b.population);
    return sortedPopulation;
}

function sortCountryCapital(countries) {

    const sortedByCapital = countries.sort((a, b) => {
        if (a.capital > b.capital) {
            return 1;
        } else {
            return -1
        }
    });
    return sortedByCapital;
}

function sortCountryName(countries) {

    const sortedByName = countries.sort((a, b) => {
        console.log('a')
        if (a.name > b.name) {
            return 1;
        } else {
            return -1
        }
    });
    return sortedByName;
}

function searchFunction(countries){
    const searchedElements = countries.filter((function(country){
        (country.name = searchInput.value)
        return true;
    }));
    console(searchedElements);
}
