const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];

function caesarCipherLogic(messageStr, key, direction) {
  let cleanStr = messageStr.trim().toLowerCase();
  let messageArray = cleanStr.split('');
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

  return newArray.join('');
}

function caesarCipher() {
  let messageStr = document.getElementById("inputText").value;
  let key = parseInt(document.getElementById("keyDropdown").value);
  let direction = document.getElementById("directionDropdown").value;

  let result = caesarCipherLogic(messageStr, key, direction);
  document.getElementById("outputText").value = result;
}

if (typeof document !== "undefined") {
  const button = document.getElementById("codeDecode");
  if (button) {
    button.addEventListener("click", caesarCipher);
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { caesarCipherLogic };
}