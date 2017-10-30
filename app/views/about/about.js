var frame = require('ui/frame');

function onTap(){
    var navigationEntry =  {
        moduleName: 'views/home/home-page',
        transition: {
            name: "flipLeft"
        }
    };
    frame.topmost().navigate(navigationEntry);
}
exports.onTap = onTap;