let body = document.getElementsByTagName('body')[0];
let inputDescription = document.querySelector('.input-description');
let inputAmount = document.querySelector('.input-amount');
let selectOption = document.querySelector('.select') //this is the drop-down to select income / expense
let inputIncome = document.querySelector('.input-income');
let inputExpense = document.querySelector('.input-expense');
let addButton = document.querySelector('.add-button');
let generatedIncomeDiv = document.querySelector('.generated-income');
let generatedExpenseDiv = document.querySelector('.generated-expense');
let generatedBalanceDiv = document.querySelector('.generated-balance');

//document.querySelector('.add-button').addEventListener('click', generatedIncomeFunction);

//creating data, to show something when page loads.
//forSelf: it is easier to work when there is set of data available, so, if there is no given data, make some first.

let accountStatement = 
[{Description: 'salary', Amount: 2200, Heading: 'income'},
{Description: 'product salel', Amount: 800, Heading: 'income'},
{Description:'Rent', Amount:'600', Heading: 'expense'},
{Description: 'shopping', Amount:'50', Heading: 'expense'}]


function collectData (arr){
    arr.push({Description:inputDescription.value, Amount: inputAmount.value, Heading:selectOption.value })
}


