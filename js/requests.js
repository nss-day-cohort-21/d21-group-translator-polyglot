let languageSelect = document.getElementById("language-select");
let sourceText = document.getElementById("input");
let submitButton = document.getElementById("submit-button");
let outPut = document.getElementById("output");
var transLang = "";
var myR;
let translation = [];
let getJSON = function(){
  if (myR.status === 200) {
    translation = JSON.parse(myR.responseText);
  } else {
    console.log(myR.status);
  }
  outPut.value = translation.data.translations[0].translatedText
}


let runTranslation = function(){
  myR = new XMLHttpRequest();
  myR.addEventListener("load", getJSON)

  myR.open("GET", `https://translation.googleapis.com/language/translate/v2?q=${sourceText.value}&target=${transLang}&key=${api}`);
  myR.send();
}
submitButton.addEventListener("click", runTranslation)


languageSelect.addEventListener("change", function(e){
  if (this.value === "french") {
    transLang = "fr";
  } else if (this.value === "spanish") {
    transLang = "es";
  } else if (this.value === "german") {
    transLang = "de";
  }
  console.log(transLang);
});
