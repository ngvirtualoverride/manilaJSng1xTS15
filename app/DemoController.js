define(["require", "exports"], function (require, exports) {
    var DemoController = (function () {
        function DemoController(demoService) {
            var _this = this;
            this.demoService = demoService;
            this.message = "Hallo World!";
            demoService.getPersons()
                .then(function (response) {
                _this.persons = response;
            });
        }
        DemoController.$inject = ['DemoService'];
        return DemoController;
    })();
    exports.DemoController = DemoController;
});
//# sourceMappingURL=DemoController.js.map