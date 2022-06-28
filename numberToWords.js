const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const resultText = document.getElementById("result");

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let number = numberInput.value;
  numberToWords(number);
})

function numberToWords(number) {

  let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  //For 0
  if (parseInt(number) === 0) {
    resultText.innerText = "zero";
  }

  //For numbers less than 20
  if (parseInt(number) !== 0 && parseInt(number) < 20) {
    resultText.innerText = `${units[parseInt(number)]}`;
  }

  //For numbers less than 100
  if (parseInt(number) >= 20 && parseInt(number) < 100) {
    let tensValue = Math.floor(number / 10);
    let onesValue = number % 10;
    if (onesValue !== 0) {
      resultText.innerText = `${tens[tensValue] + "-" + units[onesValue]}`;
    } else {
      resultText.innerText = `${tens[tensValue]}`;
    }
  }

  //For numbers between 100 and 1000

  if (number.length == 3) {
    if (number[1] === "0" && number[2] === "0") {
      resultText.innerText = `${units[number[0]] + " hundred"}`
    } else {
      resultText.innerText = `${units[number[0]] + " hundred and " + tens[number[1]] + "-" + units[number[2]]}`
    }
  }

}