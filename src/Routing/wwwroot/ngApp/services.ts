namespace MyApp.Services {

    export class AccountService {
        public isLoggedIn() {
            return false;
        }
    }

    angular.module("MyApp").service("accountService", AccountService);
}