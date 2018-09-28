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

    [{
            Description: 'salary',
            Amount: 2200,
            Heading: 'income'
        },
        {
            Description: 'product sale',
            Amount: 800,
            Heading: 'income'
        },
        {
            Description: 'Rent',
            Amount: 600,
            Heading: 'expense'
        },
        {
            Description: 'shopping',
            Amount: 50,
            Heading: 'expense'
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

});

function collectData(arr) {

    arr.push({
        Description: inputDescription.value,
        Amount: parseInt(inputAmount.value),
        Heading: selectOption.value
    })
}

function displayIncomeStatement(arr) {
    let incomeStatement = arr.filter(element => element.Heading == 'income');
    incomeStatement.forEach(element => {
        let displayIncome = document.createElement('div');
        displayIncome.className = 'display-income';
        displayIncome.innerHTML = `
        <div>${element.Description}:
        ${element.Amount}
        (${element.Heading})</div>`
        
        generatedIncomeDiv.appendChild(displayIncome);

    });
}

function displayExpenseStatement(arr){
    let expenseStatement = arr.filter(element => element.Heading == 'expense');
    expenseStatement.forEach(element => {
        let displayExpense = document.createElement('div');
        displayExpense.className = 'display-expense';
        displayExpense.innerHTML =`
        <div>${element.Description}:
        ${element.Amount}
        (${element.Heading}) </div>`
        generatedIncomeDiv.appendChild(displayExpense);
    })
}

const filterTotalfn = (arr, heading) => {
    console.log("test incomes?", heading);
    let result = arr.filter(element => element.Heading == heading).
    reduce((acc, curr) => {
        console.log("test", acc, curr);
        return acc + curr.Amount;
    }, 0)
    return result;
}

function displayBalanceStatement(arr) {
   
    //let generatedTotalBalance = document.createElement('div');
    let totalIncome = filterTotalfn(arr, "income");
    let totalExpense = filterTotalfn(arr, "expense");
    generatedBalanceDiv.className = 'display-balance';
    generatedBalanceDiv.innerHTML = `'Your Total Balance is:' + ${totalIncome - totalExpense}`
}


