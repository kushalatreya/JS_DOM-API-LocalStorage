let body = document.getElementsByTagName('body')[0];
let inputDescription = document.querySelector('.input-description');
let inputAmount = document.querySelector('.input-amount');
let selectOption = document.querySelector('.select') //this is the drop-down to select income / expense
let inputIncome = document.querySelector('.input-income');
let inputExpense = document.querySelector('.input-expense');
let addButton = document.querySelector('.add-button');
let generatedIncomeDiv = document.querySelector('.generated-income-div');
let generatedExpenseDiv = document.querySelector('.generated-expense-div');
let generatedBalanceDiv = document.querySelector('.generated-balance');


//creating data, to show something when page loads.
//forSelf: it is easier to work when there is set of data available, so, if there is no given data, make some first.


let accountStatement =

     [
         {
            Description: 'salary',
            Amount: 2200,
            Heading: 'income',
            Date: '1 / 09 / 2018',
            Id: "#j0h2o5"

        },
        {
            Description: 'Rent',
            Amount: 600,
            Heading: 'expense',
            Date: '14 / 09 / 2018',
            Id: "#e0v1o3"
        }, 
        {
            Description: 'product sale',
            Amount: 800,
            Heading: 'income',
            Date: '10 / 09 / 2018',
            Id: "#3oa2o5"
        },
        
        {
            Description: 'shopping',
            Amount: 50,
            Heading: 'expense',
            Date: '19 / 09 / 2018',
            Id: "#d3h9ad"
        }
    ]


document.querySelector('.add-button').addEventListener('click', () => {
    //to clear the div, everytime when addbutton is clicked -> it doesn't allow repetition.    
    //===BUG=== this is clearing heading, the H4 tag.
    generatedIncomeDiv.innerHTML = "";
    //generatedExpenseDiv.innerHTML = "";
    generatedBalanceDiv.innerHTML = "";
    collectData(accountStatement);
    displayIncomeStatement(accountStatement);
    displayExpenseStatement(accountStatement);
    displayBalanceStatement(accountStatement);
   // strictEmptyField();

});


//save user input data in array
function collectData(arr) {

    arr.push({
        Description: inputDescription.value,
        Amount: parseInt(inputAmount.value), //this will return number
        Heading: selectOption.value,
        Date: (displayDateTime()),
        Id: (userIdGenerator(6))
        //we are generating total of 7 character, 6 random and all starting with #
        //this is to generate unique id, this wouldn't be shown to the user but, is assigned to every entry 
        //so it will be easier to manupulate the earlier input, like delete or edit. (using in the future.)
        //displayIncome.id = userIdGenerator(6);
    })
    localStorage.setItem(selectOption.value, JSON.stringify(arr, undefined, 4));
}

//input-field validation type: number, deletes the character if its not number, deletes also minus sign.
const conformInputNumValid = (input) => {
    input.value = input.value.replace(/[^0-9]/, '');
}

/* function strictEmptyField() {
   if (inputAmount.value == ""){
        alert("Enter a Valid Amount");
        return false;
   }
}; */


//filter the data in array and display in browser with HEADING:'income'
function displayIncomeStatement(arr) {
    //let incomeStatement = arr.filter(element => element.Heading == 'income');
    const incomeObjs = JSON.parse(localStorage.getItem("income"));
    console.log("incomeObjs ?", incomeObjs);
    incomeObjs.forEach(element => {
        let displayIncome = document.createElement('div');
        displayIncome.className = 'display-income';
        displayIncome.innerHTML = `
        <div>${element.Description}:
        ${element.Amount}
        (${element.Heading}),
        ${element.Date}
          </div>`
        generatedIncomeDiv.appendChild(displayIncome);

    });
}
//filter the data in array and display in browser with HEADING:'expense
function displayExpenseStatement(arr) {
    let expenseStatement = arr.filter(element => element.Heading == 'expense');
    expenseStatement.forEach(element => {
        let displayExpense = document.createElement('div');
        displayExpense.className = 'display-expense';
        displayExpense.innerHTML = `
        <div>${element.Description}:
        ${element.Amount}
        (${element.Heading}),
        ${element.Date}
         </div>`
        generatedIncomeDiv.appendChild(displayExpense);
    })
}
// filter the data with the input heading and calculate sum
const filterTotalfn = (arr, heading) => {
  //  console.log("test incomes", heading);
    let result = arr.filter(element => element.Heading == heading).
    reduce((acc, curr) => {
       // console.log("test", acc, curr);
        return acc + curr.Amount;
    }, 0)
    return result;
}

//display the  totalbalance of array in browser
function displayBalanceStatement(arr) {
    let totalIncome = filterTotalfn(arr, "income");
    let totalExpense = filterTotalfn(arr, "expense");
    generatedBalanceDiv.className = 'display-balance';
    generatedBalanceDiv.innerHTML = `Your Total Balance is : € ${totalIncome - totalExpense}`
}

// This is the function to display date and time, which allows user to see when they have added the entry.:
function displayDateTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return (`${day}/${month}/${year} ${hours}:${minutes}`);
}

//this is to generate unique id, this wouldn't be shown to the user but, is assigned to every entry 
//so it will be easier to manupulate the earlier input, like delete or edit. (using in the future.)
function userIdGenerator(number) {
    /* let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let userId = '#';
    for (let i = 0; i < number; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        userId += chars.substring(randomNumber, randomNumber + 1);
    } 
    return userId;
    */
     return '#' + Math.random().toString(36).substr(2, number);
    
     // Math.random should be unique because of its seeding algorithm.
     // Convert it to base 36 (numbers + letters), and grab the first 6 characters
     // after the decimal.
    
}
//we are generating total of 7 character, 6 random and all starting with #
