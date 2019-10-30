//Business Logic
const vowels = /^([^aeiouq])+/g;
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
      if(word.includes(word.charAt(0))){
        transformedArray.push(word.slice(1) + "ay");
        console.log("2", sentence);
        console.log("3", word);
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
