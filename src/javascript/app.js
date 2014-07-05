
var Ractive = require('ractive');

var ractive = new Ractive({
    el: '#output',
    template: require('../templates/template.html'),
    data: {
        name: 'World'
    }
});

