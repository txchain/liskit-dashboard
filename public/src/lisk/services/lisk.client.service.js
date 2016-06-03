/**
 * Created by andreafspeziale on 16/04/16.
 */
lisk.factory('LiskServices', ['$http', '$q', function($http, $q) {
    // your ip
    var ip = 'http://194.116.72.38:8000';
    // will all return promise objects
    return {
        getBalance: function(address) {
            return $http.get(ip+'/api/accounts/getBalance?address='+address)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getBalance lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getBalance lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getDelegateStats: function() {
            return $http.get(ip+'/api/delegates?getActive')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getDelegateStats lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getDelegateStats lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getVotesOfAccount: function(address) {
            return $http.get(ip+'/api/accounts/delegates/?address='+address)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getVotesOfAccount lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getVotesOfAccount lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getVoters: function(public_key) {
            return $http.get(ip+'/api/delegates/voters?publicKey='+public_key)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getVoters lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getVoters lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getPublicKey: function(address) {
            return $http.get(ip+'/api/accounts/getPublicKey?address='+address)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getPublicKey lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getPublicKey lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getAccount: function(address) {
            return $http.get(ip+'/api/accounts?address='+address)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getAccount lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getAccount lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getBlockChainHeight: function() {
            return $http.get(ip+'/api/blocks/getHeight')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getAccount lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getAccount lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getSynchronisationStatus: function() {
            return $http.get(ip+'/api/loader/status/sync')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getAccount lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getAccount lisk service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getDelegates: function(offset) {
            return $http.get(ip+'/api/delegates?offset='+offset)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getDelegates lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getDelegates lisk service promise rejected');
                    return $q.reject(response.data);
                });
        }
    }
}]);
