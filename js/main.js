'use strict';


let options = Array.from(document.querySelectorAll('select'));
let translateBtn = document.querySelector('#submit-button');
let outPut = document.querySelector('#outPut');

let getLanguage = function(language) {
	let input = document.getElementById('input').value;
    let inputArr = input.split(' ');
    
}

translateBtn.addEventListener('click', function(event) {
    options.forEach(function(option) {
        if (option.value === 'spanish') {
        	console.log("option value", option.value);
            getLanguage(Dictionary.getSpanish());
        } else if (option.value === 'french') {
			console.log("option value", option.value);
            getLanguage(Dictionary.translatetofrench());
        } else if (option.value === 'german') {
			console.log("option value", option.value);
            getLanguage(Dictionary.getGerman());
        }
    });
});
