namespace MyApp.Controllers {

    export class MainController {
        constructor(public $state: ng.ui.IStateService) { }
    }
    angular.module("MyApp").controller("MainController", MainController);

    export class HomeController {
        public message = "Home Page";

    }

    let products = [
        { id: 1, name: 'Milk', price: 5.00 },
        { id: 2, name: "Cheese", price: 17.00 },
        { id: 3, name: "Apples", price: 3.40 }
    ];

    export class ProductListController {
        public products = products;
    }

    export class ProductDetailsController {

        public product;

        constructor($stateParams: ng.ui.IStateParamsService) {
            this.product = products.filter((p) => p.id == $stateParams['id'])[0];
        }

    }

    export class AboutController {
        public message = "About Page";

        doSomething() {
            this.$state.go("Home");
        }
        constructor(private $state: ng.ui.IStateService) { }
    }
}