'use strict';

var Spanish = (function(originalDictionary) {
    let spanish = {
        "merry": "Feliz",
        "christmas": "navidad",
        "and": "y",
        "happy": "prospero",
        "year": "ano",
        "new": "nuevo"
    };

    originalDictionary.getSpanish = function() {
        return spanish;
    }
    return originalDictionary;
})(Dictionary || {});