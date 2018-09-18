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
for  (let i = 0; i <= 10; i++){
    console.log(i);
}
//while
let i = 0;
while ( i <= 10) {
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
{let j = 10;
while (j >= 0){
    console.log(j);
    j--
}}

//do while

let l = 10;
do{
    console.log(l)
    l--
}
while(l >= 0)

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

function addNumbers(a,b){
    console.log(a + b)
}
addNumbers(2,4);

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

let num =[1010,4,4,4,5,6,7,8,9]
let emptyArray =[]
printArray = function(arr){
    arr.forEach(element => {

       let store = emptyArray.push(element);
       console.log(store)   
    });
}
printArray(num)