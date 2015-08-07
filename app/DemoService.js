define(["require", "exports"], function (require, exports) {
    var DemoService = (function () {
        function DemoService($http) {
            this.$http = $http;
            console.log(this.$http);
        }
        DemoService.prototype.getPersons = function () {
            return this.$http.get('../../data/persons.json');
        };
        DemoService.$inject = ['$http'];
        return DemoService;
    })();
    exports.DemoService = DemoService;
});
//# sourceMappingURL=DemoService.js.map