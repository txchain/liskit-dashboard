/**
 * Created by andreafspeziale on 16/04/16.
 */
dashboard.factory('DashboardServices', ['$http', function($http) {
    // will all return promise objects
    return {
        getBalance: function(address) {
            return $http.get('https://login.lisk.io/api/accounts/getBalance?address='+address);
        },
        getDelegateStats: function() {
            return $http.get('https://login.lisk.io/api/delegates?getActive');
        },
        getNumberOfVoters: function(public_key) {
            return $http.get('https://login.lisk.io/api/delegates/voters?publicKey='+public_key);
        }
    }
}]);