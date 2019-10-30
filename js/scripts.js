//Business Logic
const vowels = /^([^aeiouq])+/g;
const consonants = /^([^bcdfghjklmnpqrstvxyz])+/g;
const newArray = [];
function pig(sentence, vowel, cons) {
  let transformedArray = [];
  sentence.forEach(function(word) {
    if (vowel.includes(word.charAt(0))) {
      transformedArray.push(word + "way")
    } else if (cons.includes(word.charAt(0))) {
      transformedArray.push(word.slice(1) + word.charAt(0) + "ay")
    } else {
      alert("nope")
    }
    });
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
