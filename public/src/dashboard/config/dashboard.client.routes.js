/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
         templateUrl: '/public/src/dashboard/views/dashboard.html'
       }).otherwise({
      redirectTo: '/'
    });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}])