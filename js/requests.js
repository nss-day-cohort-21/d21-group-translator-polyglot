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

let langObj = {
  "Afrikaans":"af",
  "Albanian":"sq",
  "Amharic":"am",
  "Arabic":"ar",
  "Armenian":"hy",
  "Azeerbaijani":"az",
  "Basque":"eu",
  "Belarusian":"be",
  "Bengali":"bn",
  "Bosnian":"bs",
  "Bulgarian":"bg",
  "Catalan":"ca",
  "Cebuano":"ceb",
  "Chinese":"zh-CN",
  "Chinese":"zh-TW",
  "Corsican":"co",
  "Croatian":"hr",
  "Czech":"cs",
  "Danish":"da",
  "Dutch":"nl",
  "English":"en",
  "Esperanto":"eo",
  "Estonian":"et",
  "Finnish":"fi",
  "French":"fr",
  "Frisian":"fy",
  "Galician":"gl",
  "Georgian":"ka",
  "German":"de",
  "Greek":"el",
  "Gujarati":"gu",
  "Haitian Creole":"ht",
  "Hausa":"ha",
  "Hawaiian":"haw",
  "Hebrew":"iw",
  "Hindi":"hi",
  "Hmong":"hmn",
  "Hungarian":"hu",
  "Icelandic":"is",
  "Igbo":"ig",
  "Indonesian":"id",
  "Irish":"ga",
  "Italian":"it",
  "Japanese":"ja",
  "Javanese":"jw",
  "Kannada":"kn",
  "Kazakh":"kk",
  "Khmer":"km",
  "Korean":"ko",
  "Kurdish":"ku",
  "Kyrgyz":"ky",
  "Lao":"lo",
  "Latin":"la",
  "Latvian":"lv",
  "Lithuanian":"lt",
  "Luxembourgish":"lb",
  "Macedonian":"mk",
  "Malagasy":"mg",
  "Malay":"ms",
  "Malayalam":"ml",
  "Maori":"mi",
  "Marathi":"mr",
  "Mongolian":"mn",
  "Myanmar":"my",
  "Nepali":"ne",
  "Norwegian":"no",
  "Nyanja":"ny",
  "Pashto":"ps",
  "Persian":"fa",
  "Polish":"pl",
  "Portuguese":"pt",
  "Punjabi":"ma",
  "Romanian":"ro",
  "Russian":"ru",
  "Samoan":"sm",
  "Scots Gaelic":"gd",
  "Serbian":"sr",
  "Sesotho":"st",
  "Shona":"sn",
  "Sindhi":"sd",
  "Sinhalese":"si",
  "Slovak":"sk",
  "Slovenian":"sl",
  "Somali":"so",
  "Spanish":"es",
  "Sundanese":"su",
  "Swahili":"sw",
  "Swedish":"sv",
  "Tagalog":"tl",
  "Tajik":"tg",
  "Tamil":"ta",
  "Telugu":"te",
  "Thai":"th",
  "Turkish":"tr",
  "Ukrainian":"uk",
  "Urdu":"ur",
  "Uzbek":"uz",
  "Vietnamese":"vi",
  "Welsh":"cy",
  "Xhosa":"xh",
  "Yiddish":"yi",
  "Yoruba":"yo",
  "Zulu":"zu"
}
let translateButton = document.getElementById("submit-button");
let container = document.getElementById("container");
let select = document.createElement("select");
select.id = "selectLang";
let disabledOption = document.createElement("option");
disabledOption.setAttribute("disabled", true);
disabledOption.setAttribute("selected", true);
disabledOption.innerHTML = "Choose Language";
select.appendChild(disabledOption);
for (var lang in langObj) {
  let option = document.createElement("option");
  option.value = langObj[lang];
  option.innerHTML = lang;
  select.appendChild(option);
}
container.insertBefore(select, translateButton);

select.addEventListener("change", function(e){
  transLang = this.value;
  console.log(transLang);
});
