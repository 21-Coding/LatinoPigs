//Business Logic
const vowels = /^([aeiouq])+/g;
// const vowels = ["a", "e", "i", "o","u"];
const consonants = /^([bcdfghjklmnpqrstvxyz])+/g;
let newArray = [];
function pig(sentence, vowel, cons) {
  let transformedArray = [];
  console.log("1", sentence);
  sentence.forEach(function(word) {
    console.log("Word: ", word);
    if(word.charAt(0) === "y"){ //If word has a Y
      console.log("Char 0: ", (word.charAt(0)));
      transformedArray.push(word.slice(1) +  word.charAt(0) + "ay");
    } else if (word.charAt(0).match(cons)){ //If word has a vowel
      console.log("Consonant Branch");
      transformedArray.push(word + "way");
    } else if(word.charAt(0).match(vowel)){ // If word has a consonant
      console.log("Vowel Branch");
        transformedArray.push(word + "way");
        console.log("4", sentence);
        console.log("5", word);
    } else {
      console.log("end");
    }
    });
    console.log("6", sentence);
    console.log("7", transformedArray);
    return transformedArray;
  };

// user interface
$(document).ready(function() {
  $("form#userform").submit(function(event) {
    event.preventDefault();
    const input = $("input#userinput").val();
    const inputArray = input.split(" ");
    const thePig = pig(inputArray, vowels, consonants);
    console.log("thePig: " + thePig);
  });
});
