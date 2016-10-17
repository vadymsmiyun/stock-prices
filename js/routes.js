stockPrices.config(['$stateProvider', function ($stateProvider) {
    $stateProvider

        .state('main', {
            url: "/main",
            views: {
                'mainContainer@': {
                    controller: "MainCtrl",
                    controllerAs: "MainCtrl"
                }
            }
        })

}]);