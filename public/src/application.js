var mainApplicationModuleName = 'liskIt-dashboard';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'angularMoment','lisk', 'dashboard', 'backend', 'exchange', 'detail','angularSpinner']);

mainApplicationModule.config(['$locationProvider', function($locationProvider){
     $locationProvider.hashPrefix('!');
}]);
angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});
