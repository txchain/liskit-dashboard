/**
 * Created by andreafspeziale on 16/04/16.
 */
dashboard.factory('DashboardServices', ['$http', function($http) {
    // will all return promise objects
    return {
        getBalance: function(address) {
            return $http.get('https://login.lisk.io/api/accounts/getBalance?address='+address);
        }
    }
}]);