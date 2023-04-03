function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('')
  if(word === reversedWord){
    return true
  }else{
    return false
  }
}


/* 
  Add your pseudocode here
  create variable reversedWord 
  convert word to array then reverse it
  if word is equal to the reversedWord
  its true
  else it is false
*/

/*
  Add written explanation of your solution here
  First added a variable called reversedWord that reverses the word provided
  it does so by converting it into an array then reverses and finally joins it back into a string
  you then employ the if else statement using the strict equators to get thhe false or true value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
