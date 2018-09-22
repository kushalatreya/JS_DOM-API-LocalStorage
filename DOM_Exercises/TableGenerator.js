console.log('Hello World, lets generate some table')

//Dom Manipulation starts here:
let wrapper = document.querySelector('.main-body');
let table = document.createElement('table');

function generate_table() {

    table.innerHTML = ""; // to clear the table everytime, when pressed generate table.
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
    let genereatedTableWidthValue = userInputTableWidth.value + '%';

    let userInputBorderWidth = document.querySelector('.user-input-border-width');
    let genereatedBorderWidth = userInputBorderWidth.value + "px";

    let userInputTableColor = document.querySelector('.user-input-background-color')
    let generatedTableColor = userInputTableColor.value

    let userInputHeaderColor = document.querySelector('.user-input-header-color')
    let generatedHeaderColor = userInputHeaderColor.value

    let userInputBodyColor = document.querySelector('.user-input-body-color')
    let generatedBodyColor = userInputBodyColor.value

    let userInputBorderColor = document.querySelector('.user-input-border-color')
    let generatedBorderColor = userInputBorderColor.value

    let userInputFontColor = document.querySelector('.user-input-font-color')
    let generatedFontColor = userInputFontColor.value

    //let genereatedRowsValue = userInputRows.value;

    table.width = genereatedTableWidthValue;
    table.border = genereatedBorderWidth;
    table.style.border = genereatedBorderWidth;

    tbody.style.backgroundColor = generatedTableColor;





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

//styling
 





}
