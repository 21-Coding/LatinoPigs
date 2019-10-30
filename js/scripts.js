//Business Logic
const vowels = /^([^aeiouq])+/g;
// const vowels = ["a", "e", "i", "o","u"];
const consonants = /^([^bcdfghjklmnpqrstvxyz])+/g;
let newArray = [];
// function pig(sentence, vowel, cons) {
//   let transformedArray = [];
//   console.log(sentence);
//   sentence.forEach(function(word) {
//     console.log(word.charAt(0));
//     if (sentence.includes(word.charAt(0))) {
//       transformedArray.push(word + "way")
//       console.log("First if statement: ", transformedArray);
//     } else if (sentence.includes(word.charAt(0))) {
//       transformedArray.push(word.slice(1) + word.charAt(0) + "ay")
//       console.log("2",transformedArray);
//     } else {
//       alert("Nothing")
//       console.log("3", transformedArray);
//     }
//     });
//     return transformedArray;
//   };
function pig(sentence, vowel, cons) {
  let transformedArray = [];
  console.log("1", sentence);
  sentence.forEach(function(word) {
    console.log("1.5", word);
    if(word.charAt(0).match(vowels)){
      console.log("2", word);
      console.log("Vowel: ", vowel);
      transformedArray.push(word.charAt(0) + "way");
      // word + way
      console.log("3", word);
    } else if(word.charAt(0).match(consonants)){
        transformedArray.push(word.slice(1) + (word.charAt(0) + "ay"));
        console.log("4", sentence);
        console.log("5", word);
    }
    });
    console.log("4", sentence);
    console.log("5", transformedArray);
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
