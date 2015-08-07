define(["require", "exports", './DemoController', './DemoService', 'angular'], 
    function (require, exports, DemoController_1, DemoService_1, angular) {
    var app = angular.module('app', []);
    app.controller('DemoController', DemoController_1.DemoController)
        .service('DemoService', DemoService_1.DemoService);
    angular.element(document)
        .ready(function () {
        angular
            .bootstrap(document, ['app']);
    });
});
//# sourceMappingURL=app.js.map