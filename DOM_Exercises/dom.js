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
    return hexa;
    
}


//DOM
/* const userInputNumber = Number(prompt('How Many Column You Want'))
 */let wrapper =  document.querySelector('.wrapper');

let headerDiv = document.createElement('div')
headerDiv.style.backgroundColor = 'pink';
headerDiv.style.margin = 'auto'
headerDiv.style.height = '40%'
headerDiv.style.width = '60%'
headerDiv.style.fontSize = '2em'
headerDiv.style.color = 'black'
headerDiv.textContent = 'hexadecimal color generator'
let breakLineHere = document.createElement('br')

let userInput = document.createElement('input');
userInput.setAttribute("type","number");
userInput.className = 'userInputNumber';
userInput.value 





let generateButton = document.createElement('button')
generateButton.textContent = 'Generate Color'
generateButton.style.backgroundColor = '#32DCA9'
let stopButton = document.createElement('button')
stopButton.textContent = 'Stop'
let paragraphTwo = document.createElement('p')
stopButton.style.backgroundColor = 'red'

paragraphTwo.textContent = 'generate color of your need'
paragraphTwo.style.fontSize = '0.5em'



wrapper.appendChild(headerDiv);
headerDiv.appendChild(breakLineHere);
headerDiv.appendChild(userInput);
headerDiv.appendChild(generateButton);
headerDiv.appendChild(stopButton);
headerDiv.appendChild(paragraphTwo);









for (let i = 0; i<3; i++){
//element of html
let repeatingDiv = document.createElement('div');
let copyButton = document.createElement('button')
copyButton.style.float = 'right'
copyButton.style.paddingRight = 'center'
copyButton.style.fontSize = '0.3em'
copyButton.style.textHeight = '50%'
copyButton.textContent = 'copy'

repeatingDiv.style.backgroundColor = hexaNumber();
repeatingDiv.style.margin = 'auto'
repeatingDiv.style.height = '40%'
repeatingDiv.style.width = '60%'
repeatingDiv.style.fontSize = '4em'
repeatingDiv.textContent = hexaNumber()
repeatingDiv.style.color = hexaNumber()
wrapper.appendChild(repeatingDiv);
repeatingDiv.appendChild(copyButton);
}
