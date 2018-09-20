console.log('Hello World, lets generate some table')

//Dom Manipulation starts here:
let wrapper = document.getElementsByTagName('body')[0];

function generate_table() {
let mainTable = document.createElement('table');



wrapper.appendChild(mainTable)




}























/* function generate_table() {
//creating the body element of HTML as a wrapper (class name extracted from HTML)
let wrapper = document.querySelector('.main-body');

//creating Table to manupulate.
let ourTable = document.createElement('table')

let tableBody = document.createElement('tbody')

for( let i=0; i < 2; i++){

    let tableRow = document.createElement('tr');

    for(let j = 0; j < 2; j++){
        let tableData = document.createElement('
        ');
        let TableDataText = document.textContent("cell in row " + i + ", column " + j);

        TableDataText.appendChild(tableData)
        tableRow.appendChild(tableData)
    }
    tableBody.appendChild(tableRow)
}
//appending table to main body

ourTable.appendChild(TableBody)

wrapper.appendChild(ourTable)

 ourTable.setAttribute("border", "2");
 

}
 */