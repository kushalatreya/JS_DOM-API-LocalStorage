console.log('Hello World, lets generate some table')

//Dom Manipulation starts here:

let wrapper = document.querySelector('.main-body');
let table = document.createElement('table');


//event listener, when generete table button is clicked, generatedTable() function is run
const generateTableButton = document.querySelector('.generate-table-button');
generateTableButton.addEventListener("click", generateTable);

function generateTable() {
    table.innerHTML = ""; // to clear the table everytime, when pressed generate table.

    //creating table head and table body
    let thead = document.createElement('thead');
    let tbody = document.createElement('body');

    let tableRow;
    let tableHead;
    let tableData;

    let userInputRows = document.querySelector('.user-input-rows');
    let genereatedRowsValue = userInputRows.value;

    let userInputCol = document.querySelector('.user-input-col');
    let genereatedColValue = userInputCol.value;

    let userInputTableWidth = document.querySelector('.user-input-table-width');
    let genereatedTableWidth = userInputTableWidth.value + '%';

    let userInputBorderWidth = document.querySelector('.user-input-border-width');
    let genereatedBorderWidth = userInputBorderWidth.value + 'px';

    let userInputTableColor = document.querySelector('.user-input-background-color');
    let generatedTableColor = userInputTableColor.value;

    let userInputHeaderColor = document.querySelector('.user-input-header-color');
    let generatedHeaderColor = userInputHeaderColor.value;

    let userInputBodyColor = document.querySelector('.user-input-body-color');
    let generatedBodyColor = userInputBodyColor.value;

    let userInputBorderColor = document.querySelector('.user-input-border-color');
    let generatedBorderColor = userInputBorderColor.value;

    let userInputFontColor = document.querySelector('.user-input-font-color');
    let generatedFontColor = userInputFontColor.value;

    //let genereatedRowsValue = userInputRows.value;

    table.width = genereatedTableWidth;
    
    table.style.color = generatedFontColor;
    tbody.style.backgroundColor = generatedTableColor;

    table.style.border = genereatedBorderWidth;
    table.style.border = 'solid';
    table.style.borderWidth = genereatedBorderWidth;
    table.style.borderColor = generatedBorderColor;

    for (let row = 0; row <= genereatedRowsValue; row++) {
        tableRow = document.createElement('tr');
        tableRow.textContent = row + 'row'

        for (let col = 0; col <= genereatedColValue; col++) {
            if (row === 0) {
                tableHead = document.createElement('th');
                //tableHead.style.width = '100%';
                //tableData.style.width = '20px';
                tableHead.textContent = col + 'hcel'
                tableRow.appendChild(tableHead)
                tbody.appendChild(tableRow)
                tableHead.style.backgroundColor = generatedHeaderColor;

            } else {
                tableData = document.createElement('td');
                tableData.textContent = col + "cell"
                tableRow.appendChild(tableData)
                tbody.appendChild(tableRow)
            }
        }
        table.appendChild(thead);

        wrapper.appendChild(table)
        //table.setAttribute("border", "2px");
    }
    table.appendChild(tbody);
}
