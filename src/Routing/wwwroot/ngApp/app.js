var MyApp;
(function (MyApp) {
    angular.module("MyApp", ['ui.router', 'ngResource']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('Home', {
            url: "/",
            templateUrl: "ngApp/products.html",
            controller: MyApp.Controllers.ProductListController,
            controllerAs: "controller"
        })
            .state("About", {
            url: "/about",
            templateUrl: "ngApp/about.html",
            controller: MyApp.Controllers.AboutController,
            controllerAs: "controller"
        })
            .state('Details', {
            url: '/details/:id',
            templateUrl: '/ngApp/details.html',
            controller: MyApp.Controllers.ProductDetailsController,
            controllerAs: 'controller'
        })
            .state('secret', {
            url: '/secret',
            templateUrl: '/ngApp/secret.html',
            data: {
                requiresAuthentication: true
            }
        })
            .state('login', {
            url: '/login',
            templateUrl: '/ngApp/login.html'
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
    angular.module("MyApp").run(function ($rootScope, $state, accountService) {
        $rootScope.$on('$stateChangeStart', function (e, to) {
            if (to.data && to.data.requiresAuthentication) {
                if (!accountService.isLoggedIn()) {
                    e.preventDefault();
                    $state.go("login");
                }
            }
        });
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map