// select element from Html page
let wrapper = document.querySelector('.main-body');
let table = document.createElement('table');



//
let thead = document.createElement('thead');
let tbody = document.createElement('body');

let tableRow;
let tableHead;
let tableData;

//function to generate body color
const generatedBodyColor = function () {
    let userInputBodyColor = document.querySelector('.user-input-body-color');
    let generatedBodyColor = userInputBodyColor.value;
    tbody.style.backgroundColor = generatedBodyColor;
}

//function to generate header color
const generatedHeaderColor = function () {
    let userInputHeaderColor = document.querySelector('.user-input-header-color');
    let generatedHeaderColor = userInputHeaderColor.value;
    thead.style.backgroundColor = generatedHeaderColor;
}

////function to generate table color
const generatedTableColor = function () {
    let userInputTableColor = document.querySelector('.user-input-background-color');
    let generatedTableColor = userInputTableColor.value;
    table.style.backgroundColor = generatedTableColor;
}

////function to generate border color
const generatedBorderColor = function () {
    let userInputBorderColor = document.querySelector('.user-input-border-color');
    let generatedBorderColor = userInputBorderColor.value;
    table.style.border = 'solid'
    table.style.borderColor = generatedBorderColor
}
generatedBorderColor()
////function to generate font color
const generatedFontColor = function () {
    

    let userInputFontColor = document.querySelector('.user-input-font-color');
    let generatedFontColor = userInputFontColor.value;
    table.color = generatedFontColor;
}

let generateTableButton = document.querySelector('.generate-table-button');


let generateTableFunction = function () {
    document.innerHTML = ''
    let userInputRows = document.querySelector('.user-input-rows');
    let genereatedRowsValue = userInputRows.value;

    let userInputCol = document.querySelector('.user-input-col');
    let genereatedColValue = userInputCol.value;

    let userInputTableWidth = document.querySelector('.user-input-table-width');
    let genereatedTableWidth = userInputTableWidth.value + '%';

    let userInputBorderWidth = document.querySelector('.user-input-border-width');
    let genereatedBorderWidth = userInputBorderWidth.value + 'px';


    for (let row = 0; row <= genereatedRowsValue; row++) {
        tableRow = document.createElement('tr');
        tableRow.textContent = 'trtr'

        for (let col = 0; col <= genereatedColValue; col++) {
            tableData = document.createElement('td');
            tableData.textContent = "tdtd"
            tableRow.appendChild(tableData)
            tbody.appendChild(tableRow)

        }
        table.appendChild(thead);

        wrapper.appendChild(table)
        
    }
    table.appendChild(tbody);
}

generateTableButton.addEventListener('click', generateTableFunction());
