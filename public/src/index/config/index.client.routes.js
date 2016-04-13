/**
 * Created by andreafspeziale on 13/04/16.
 */
index.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
         templateUrl: 'index/views/index.client.view.html'
       }).otherwise({
      redirectTo: '/'
    });
}])