/**
 * Created by andreafspeziale on 16/04/16.
 */
lisk.factory('LiskServices', ['$http', function($http) {
    // will all return promise objects
    return {
        getBalance: function(address) {
            return $http.get('https://login.lisk.io/api/accounts/getBalance?address='+address);
        },
        getDelegateStats: function() {
            return $http.get('https://login.lisk.io/api/delegates?getActive');
        },
        getVoters: function(public_key) {
            return $http.get('https://login.lisk.io/api/delegates/voters?publicKey='+public_key);
        },
        getPublicKey: function(address) {
            return $http.get('https://login.lisk.io/api/accounts/getPublicKey?address='+address);
        }
    }
}]);