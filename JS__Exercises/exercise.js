//“Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
//Q3.i

let companies = 'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon'
/* console.log(companies.split(" ")) */

/* Array
Declare an array  variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
Print the array using console.log()
 Print the number of companies in the array
Print out each company
Capitalize each company and print them out
Print the array like this: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

Sort the array using sort() method
 */

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
/* console.log(itCompanies); */
/* console.log(itCompanies.length);
(itCompanies.forEach(function(element){
    console.log(element);
    
})); */

//using arrow function
//not working
/* const listCompanies = itCompanies.forEach((element) => element )
console.log(listCompanies); */

console.log(companies.toUpperCase());

//sort

console.log(itCompanies.sort());


console.log(itCompanies.reverse())

/* ==========================
loop
=============================*/
/* Loop
a. Iterate 0 to 10 using for loop, do the same using while and do while loop.*/
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//while
let i = 0;
while (i <= 10) {
    console.log(i);
    i++
}

//do while
let k = 0;
do {
    console.log(k)
    k++
} while (k <= 10);

//b. Iterate 10 to 0 using for loop, do the same using while and do while loop.

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//while
{
    let j = 10;
    while (j >= 0) {
        console.log(j);
        j--
    }
}

//do while

let l = 10;
do {
    console.log(l)
    l--
}
while (l >= 0)

/* ===============================================
function
==================================================*/

//Declare a function fullName and it print out your full name.
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full name.
/* let fullName = function(){
    let firstName = 'Kushal';
    let lastName = 'Atreya';
    let FullName = `${firstName} ${lastName}`
    console.log(FullName)
}
fullName() */

//arrow function is lit.
let fullName = (() => {
    let firstName = 'Kushal';
    let lastName = 'Atreya';
    let FullName = `${firstName} ${lastName}`
    console.log(FullName)
})
fullName()

//Declare a function addNumbers and it takes two two parameters and it returns sum.

/* addNumbers = function(){

} */

function addNumbers(a, b) {
    console.log(a + b)
}
addNumbers(2, 4);

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

/* let array1 = [1,22,33];
array1.forEach(function(element){
    console.log(element)
}) */

let printArray = [1, 22, 33];
printArray.forEach((element) => console.log(element));

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array(dont’ use method).

const reverseArray = [77, 88, 99]
reverseArray.reverse()
reverseArray.forEach((elements) => console.log(elements));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array.


const capitalizeArray = ['dog', 'cat', 'monkey']
capitalizeArray.forEach((element) => console.log(element.toUpperCase()))

//Declare a function name removeItem. It returns array after removing an item.
let myArray = ['a', 'b', 'c', 'd'];

console.log(myArray.slice(1))

//Declare a function name addItem. It returns array after adding an item.
let addItem = function () {
    let list = ["foo", "bar"];
    list.push("baz");
    console.log(list)
}

addItem()

/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncomes,
 totalExpenses, acountInfo,addIncome, addExpence and accountBalance methods. 
 Incomes is a set of incomes and its description and the same for expenses. */


/* Functional Programming
Declare a function called getStringLists which take array as a parameter  and it returns array only with string items.
Declare a function called categorizeCountries which returns array of countries have some common pattern(you find the countries array from slack).
Declare a getFirstTenCountries function and return an array of ten countries
Declare a getLastTenCountries function and return an array of ten countries
Find out with which letter are there many countries */

let ourArray = ['abc',1,2,3,'cde']

let getStringLists = function(){
    return ourArray.filter((element) => element=element*0!= 0);
}
console.log(getStringLists());

let countryList = ['Finland','Sweden','France','Ireland','Holland']
let categorizeCountries = function(){
   //return countryList.filter((country)=> country.indexOf('l')=== 0)
   return countryList.filter((country) => country.endsWith('land'))
}
console.log(categorizeCountries())
