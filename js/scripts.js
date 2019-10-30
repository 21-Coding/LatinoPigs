//Business Logic
const vowels = /^([^aeiouq])+/g;
const consonants = /^([^bcdfghjklmnpqrstvxyz])+/g;
const newArray = [];
function pigLatin(sentenceArray, vowel, consonant, word){
  sentenceArray.forEach(function(vowel){
    if(sentenceArray.includes(vowel.charAt(0))){
      newArray.push((vowel) + "way");
      console.log("newArray: ", newArray);
    } else if (sentenceArray.includes(consonant.charAt(0))){
      newArray.push((sentenceArray.slice(1) + word.charAt(0)) + "ay");
    } else{
      alert("Nothing!")
    }
  })
}

//Front-End Logic
$(document).ready(function(){
  $('#pigLatinForm').submit(function(event){
  event.preventDefault();
  const phraseInput = $('input#phraseInput').val();
  let inputArray = phraseInput.split(" ");
  // let secondSplitArray = inputArray.split(",");
  console.log("Phrase: ", phraseInput);
  console.log("Split Phrase: ", inputArray);
  // console.log("Second Split: ", secondSplitArray);
  pigLatin(inputArray,vowels, consonants);
  });
});
