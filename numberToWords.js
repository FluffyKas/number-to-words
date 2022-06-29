const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const resultText = document.getElementById("result");
const btnUp = document.getElementById("btn-up");
const btnDown = document.getElementById("btn-down");

//Increment/decrement buttons

btnUp.addEventListener("click", (e) => {
  e.preventDefault();
  numberInput.value++;
})

btnDown.addEventListener("click", (e) => {
  e.preventDefault();
  numberInput.value--;
})

//Conversion function

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let number = numberInput.value;
  resultText.innerText = `${numberToWords(number)}`;

})



function numberToWords(number) {

  let words;

  let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let parsedNumber = parseInt(number);

  // For 0
  if (parsedNumber === 0) {
    words = "zero";
  }

  //For numbers less than 20
  if (parsedNumber !== 0 && parsedNumber < 20) {
    words = `${units[parseInt(parsedNumber)]}`;
  }

  //For numbers less than 100
  if (parsedNumber >= 20 && parsedNumber < 100) {
    let tensValue = Math.floor(parsedNumber / 10);
    let onesValue = parsedNumber % 10;
    if (onesValue !== 0) {
      words = `${tens[tensValue] + "-" + units[onesValue]}`;
    } else {
      words = `${tens[tensValue]}`;
    }
  }

  //For numbers greater than 100

  let remainder;

  function convertBigNumber(int, scale, conjunction) {
    remainder = parsedNumber % int;
    if (remainder > 0) {
      words = numberToWords(Math.floor(parsedNumber / int)) + scale + conjunction + numberToWords(remainder);
    } else {
      words = numberToWords(Math.floor(parsedNumber / int)) + scale;
    }
    return words;
  }

  if (parsedNumber >= 100) {
    convertBigNumber(100, " hundred ", " and ")
  }

  if (parsedNumber >= 100000) {
    convertBigNumber(1000, " thousand ", " and ")
  }

  if (parsedNumber >= 1000000) {
    convertBigNumber(1000000, " million ", " and ")
  }

  if (parsedNumber >= 1000000000) {
    convertBigNumber(1000000000, " billion ", " and ")
  }


  return words;
}