var graph = require('ngraph.generators').grid(100, 100);
var save = require('ngraph.tobinary');
save(graph);


var createLayout = require('ngraph.offline.layout');
var layout = createLayout(graph);
layout.run();