module.exports = function toReadable (number) {
  let result;
  const firstArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondArr = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const thirdArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numStr = number.toString();
  
  if (number < 10) {
    result = firstArr[number];
   } else if (numStr.length == 2 && numStr[1] == 0) {
    result = thirdArr[numStr[0]];
  } else if (numStr.length == 2 && number > 10 && number < 20) {
    result = secondArr[numStr[1]];
  } else if (numStr.length == 2 && number > 20) {
    result = thirdArr[numStr[0]] + ' ' + firstArr[numStr[1]];
  } else if (numStr.length == 3 && numStr[1] == 1 && numStr[2] == 0) {
    result = firstArr[numStr[0]] + ' hundred ten';
  } else if (numStr.length == 3 && numStr[1] == 0 && numStr[2] == 0) {
    result = firstArr[numStr[0]] + ' hundred';
  } else if (numStr.length == 3 && numStr[1] == 1 && numStr[2] !== 0) {
    result = firstArr[numStr[0]] + ' hundred ' + secondArr[numStr[2]];
  } else if (numStr.length == 3 && numStr[1] !== 0 && numStr[2] == 0) {
    result = firstArr[numStr[0]] + ' hundred ' + thirdArr[numStr[1]];
  } else if (numStr.length == 3 && numStr[1] == 0 && numStr[2] !== 0) {
    result = firstArr[numStr[0]] + ' hundred ' + firstArr[numStr[2]];
  } else {
    result = firstArr[numStr[0]] + ' hundred ' + thirdArr[numStr[1]] + ' ' + firstArr[numStr[2]]
  }
  return result;
  }