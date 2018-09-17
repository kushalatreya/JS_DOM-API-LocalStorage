//“Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
//Q3.i

let companies = 'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon'
console.log(companies.split(" "))

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
console.log(itCompanies);
console.log(itCompanies.length);
(itCompanies.forEach(function(element){
    console.log(element);
    
}));