;(function () {
    'use strict';

    var colorista = function(colors, spec) {
        if (!(colors instanceof Array))
            throw 'colors must be an Array';

        if (spec === null || typeof spec !== 'object')
            throw 'spec is not an Object';

        var c;
        if (colors.length === 0) // Default to completely random
            c = '#'+Math.random().toString(16).substr(-6);
        else
            c = colors[Math.floor(colors.length * Math.random())];

        for (var selector in spec) {
            if (spec.hasOwnProperty(selector)) {
                var elements = document.querySelectorAll(selector);
                var properties = spec[selector];
                for (var i = 0; i < elements.length; i++) {
                    var e = elements[i];
                    for (var j = 0; j < properties.length; j++) {
                        e.style[properties[j]] = c;
                    }
                }
            }
        }

        return c;
    };

    if (this.colorista) throw 'already defined';
    this.colorista = colorista;

}).call(this);
