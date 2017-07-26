'use strict';


let options = Array.from(document.querySelectorAll('select'));
let translateBtn = document.querySelector('#submit-button');
let input = document.querySelector('#input');
let output = document.querySelector('#output');

let getLanguage = function(language) {
  console.log(language);
	let textInput = input.value.toLowerCase().split(' ');

  let translation = "";
  textInput.forEach(function(word){
    if(language[word]) {
      translation += `${language[word]} `
    } else {
      translation += " " + prompt(`We don't know that word? Do you know the definition of "${word}"?`)
    }

  });

  output.innerHTML = translation;
  output.value = translation;
}

// translateBtn.addEventListener('click', function(event) {
//     options.forEach(function(option) {
//         if (option.value === 'spanish') {
//             getLanguage(Dictionary.getSpanish());
//         } else if (option.value === 'french') {
//             getLanguage(Dictionary.translatetofrench());
//         } else if (option.value === 'german') {
//             getLanguage(Dictionary.getGerman());
//         } else if (option.value === 'braille') {
//           getLanguage(Dictionary.getBraille());
//         }
//     });
// });

let voiceOptions = document.getElementById('voice');
let volumeSlider = document.getElementById('volume');
let rateSlider = document.getElementById('rate');
let pitchSlider = document.getElementById('pitch');
let speakButton = document.getElementById('speakButton');

speakButton.addEventListener("click", speak)

let voiceArr = [];

function loadVoices () {
  let voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    let voice = voices[i];
    let option = document.createElement('option');
    option.value = voice.name;
    option.innerHTML = voice.name;
    voiceOptions.appendChild(option);
    voiceArr[voice.name] = voice;
  };
};

window.speechSynthesis.onvoiceschanged = function(e){
  loadVoices();
};

function speak () {
  let translatedText = new SpeechSynthesisUtterance();
  translatedText.volume = volumeSlider.value;
  translatedText.voice = voiceArr[voiceOptions.value];
  translatedText.rate = rateSlider.value;
  translatedText.pitch = pitchSlider.value;
  translatedText.text = output.value;
  window.speechSynthesis.speak(translatedText);
};
