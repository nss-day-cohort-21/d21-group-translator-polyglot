'use strict'

var Dictionary = (function(){
    let french = {"merry":"Joyeux", "christmas":"Noël", "and":"et", "happy":"content", "new":"Nouveau", "year":"an"};
    return {
        translatetofrench: function() {
                return french;
        }
    }
})();