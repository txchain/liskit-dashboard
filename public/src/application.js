var mainApplicationModuleName = 'liskIt-dashboard';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute' ,'dashboard']);

mainApplicationModule.config(['$locationProvider', function($locationProvider){
     $locationProvider.hashPrefix('!');
}]);
angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});
