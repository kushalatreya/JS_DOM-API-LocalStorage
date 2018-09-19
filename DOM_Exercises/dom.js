/* DOM
Develop a hexadecimal number generator application which looks like the figure below. 
Divide your codes into reusable functions.
First create a JavaScript function which generate hexadecimal number.
Then create a function which creates HTML elements on the DOM.
 Use the hexadecimal number returned in the first function to other functions and change the background of the divs and display hexadecimal color inside the div.  
Set a time interval to make generate all the time and duration is 3s(3000). 
Add event listener on mouse is in or over the divs and stop the setInterval time and a feature to copy the hexadecimal color. CSS: div{ width:700px;height:110px;font-family: Montserrat;} . Use Google fonts link to access Monserrat font-family. */

/* function randomHexaNumberGenerator() {
    let chars = '0123456789ABCDEF'
    let hexaNumber = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * chars.length);
        hexaNumber += chars.substring(random, random + 1);
    }
    console.log(hexaNumber);
}
randomHexaNumberGenerator(); */


//Math.random gives random number, and to slice we have to change it to string using .toString Method.
//finally .toUpperCase generates all the characters to upperCase.
function hexaNumber(){
    let hexa =("#"+Math.random().toString(16).slice(2,8)).toUpperCase();
    console.log(hexa);
}
hexaNumber();

//DOM

