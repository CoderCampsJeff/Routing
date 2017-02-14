var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AccountService = (function () {
            function AccountService() {
            }
            AccountService.prototype.isLoggedIn = function () {
                return false;
            };
            return AccountService;
        }());
        Services.AccountService = AccountService;
        angular.module("MyApp").service("accountService", AccountService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map