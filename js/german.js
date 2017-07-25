'use strict';

var German = (function(originalDic){
  let germanLexicon = {
    "merry":"fröhlich",
    "christmas":"weihnachten",
    "and":"und",
    "happy":"frohes",
    "new":"neues",
    "year":"Jahr"
  }

  originalDic.getGerman = function(userInput){
    return germanLexicon
  };
})(Dictionary || {});
