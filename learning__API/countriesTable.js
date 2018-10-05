let divWrapper = document.querySelector('.mainDiv')
let repeatingDiv = document.createElement('div');
let inputValue = document.querySelector('.search-input');

function getCountriesListFunction() {
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
            document.querySelector('.search-input').addEventListener("keyup", () => {
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