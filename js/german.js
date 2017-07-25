var German = (function(originalDic){
  let lexicon = {"merry":"fröhlich", "christmas":"weihnachten", "and":"und", "happy":"frohes", "new":"neues", "year":"Jahr"}

  let userInput = ["merry", "happy", "new", "year"];
  let translated = [];
  originalDic.getGerman = function(userInput){
    for (var word in lexicon) {
      for (var i = 0; i < userInput.length; i++) {
        if(userInput[i] === word) {
          translated[i].push(lexicon[word]);
        } else {
          translated[i].push("unknow");
        }
      }
    }
  };
})(Dictionary || {});
