var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MainController = (function () {
            function MainController($state) {
                this.$state = $state;
            }
            return MainController;
        }());
        Controllers.MainController = MainController;
        angular.module("MyApp").controller("MainController", MainController);
        var HomeController = (function () {
            function HomeController() {
                this.message = "Home Page";
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var products = [
            { id: 1, name: 'Milk', price: 5.00 },
            { id: 2, name: "Cheese", price: 17.00 },
            { id: 3, name: "Apples", price: 3.40 }
        ];
        var ProductListController = (function () {
            function ProductListController() {
                this.products = products;
            }
            return ProductListController;
        }());
        Controllers.ProductListController = ProductListController;
        var ProductDetailsController = (function () {
            function ProductDetailsController($stateParams) {
                this.product = products.filter(function (p) { return p.id == $stateParams['id']; })[0];
            }
            return ProductDetailsController;
        }());
        Controllers.ProductDetailsController = ProductDetailsController;
        var AboutController = (function () {
            function AboutController($state) {
                this.$state = $state;
                this.message = "About Page";
            }
            AboutController.prototype.doSomething = function () {
                this.$state.go("Home");
            };
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map