'use strict';

let options = Array.from(document.querySelectorAll('select'));
let translateBtn = document.querySelector('#submit-button');
let outPut = document.querySelector('#outPut');

let getLanguage = function() {
    // write to DOM
}

translateBtn.addEventListener('click', function(event) {
    options.forEach(function(option) {
        if (option.value === 'spanish') {
            getLanguage(Dictionary.getSpanish());
        }
    });
});
