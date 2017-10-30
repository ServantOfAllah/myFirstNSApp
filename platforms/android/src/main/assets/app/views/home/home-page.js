var frameModule = require("ui/frame");
var HomeViewModel = require("./home-view-model");
var homeViewModel = new HomeViewModel();

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = homeViewModel;
}

function onTap(){
    var navigationEntry =  {
        moduleName: 'views/about/about',
        transition: {
            name: "fade"
        }
    };
    frameModule.topmost().navigate(navigationEntry);
}
exports.onTap = onTap;
exports.onNavigatingTo = onNavigatingTo;