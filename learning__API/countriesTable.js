let divWrapper = document.querySelector('.mainDiv')
let repeatingDiv = document.createElement('div');
let inputValue = document.querySelector('.search-input');
let sortCountriesName = document.querySelector('.sort-countries-name');
let reverseCountriesName = document.querySelector('.reverse-countries-name');
let sortCapitalName = document.querySelector('.sort-capital-name');
let reverseCapitaName = document.querySelector('.reverse-capital-name');
let sortPopulationName = document.querySelector('.sort-population-name');
let reversePopulationName = document.querySelector('.reverse-population-name');

function getCountriesListFunction() {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(response => response.json())
        .then(countries => {
            sortCountriesName.addEventListener('click', () => {

                showCountries(sortCountryName(countries));

            });
            reverseCountriesName.addEventListener('click', () => {

                showCountries(sortCountryName(countries).reverse());

            });
            sortCapitalName.addEventListener('click', () => {

                showCountries(sortCountryCapital(countries));

            });
            reverseCapitaName.addEventListener('click', () => {

                showCountries(sortCountryCapital(countries).reverse());

            });
            sortPopulationName.addEventListener('click', () => {
                showCountries(sortPopulation(countries));
            });
            reversePopulationName.addEventListener('click', () => {
                showCountries(sortPopulation(countries).reverse());
            });
            inputValue.addEventListener("keyup", () => {
                divWrapper.innerHTML = "";
                Search(countries);
            })

            showCountries(countries);
        })
}
getCountriesListFunction()

function showCountries(countries) {

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

        countriesFlagImage = document.createElement('img')
        countriesFlagImage.setAttribute('src', country.flag);
        countriesFlagImage.setAttribute("width", "200");
        countriesFlagImage.setAttribute("height", "150");

        //appending 
        repeatingDiv.appendChild(countryName);
        repeatingDiv.appendChild(countriesCapital);
        repeatingDiv.appendChild(countriesPopulation);
        repeatingDiv.appendChild(countriesRegion);
        repeatingDiv.appendChild(countriesFlagImage);
        divWrapper.appendChild(repeatingDiv);

        //styling function is exicuted each time when the forEach runs.
        styling()
    })
}

function styling() {
    repeatingDiv.style.border = 'solid'
    repeatingDiv.style.borderColor = 'skyBlue'
    repeatingDiv.style.borderWidth = '2px'
}

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

function Search(countries) {

    const results =
        countries.filter(country => country.name.toLowerCase().startsWith(inputValue.value) ||
            country.capital.toLowerCase().startsWith(inputValue.value) ||
            country.region.toLowerCase().startsWith(inputValue.value));
    showCountries(results);
}