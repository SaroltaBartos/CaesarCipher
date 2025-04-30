
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  document.getElementById("codeDecode").addEventListener("click", caesarCipher);


function caesarCipher() {

let messageStr = document.getElementById("inputText").value;
let key = parseInt(document.getElementById("keyDropdown").value);
let direction = document.getElementById("directionDropdown").value;

let messageArray = messageStr.split('');
let index = 0;
let newArray = [];

while (index < messageArray.length) {
  let currentChar = messageArray[index];

  if (alphabet.includes(currentChar)) {
    let currentIndexInAlphabet = alphabet.indexOf(currentChar);
    let newIndex;

    if (direction === "right") {
      newIndex = (currentIndexInAlphabet + key) % 26;
    } else if (direction === "left") {
      newIndex = (currentIndexInAlphabet - key + 26) % 26;
    }

    newArray.push(alphabet[newIndex]);
  } else {
    newArray.push(currentChar); 
  }

  index++;
}
let result = newArray.join('');
document.getElementById("outputText").value = result;
}