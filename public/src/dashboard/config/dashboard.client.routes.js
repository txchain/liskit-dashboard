/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
         templateUrl: '/public/src/dashboard/views/dashboard.html'
       }).otherwise({
      redirectTo: '/'
    });
}])