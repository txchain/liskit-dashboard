/**
 * Created by andreafspeziale on 16/04/16.
 */
lisk.factory('LiskServices', ['$http', '$q', function($http, $q) {
    // will all return promise objects
    return {
        getBalance: function(address) {
            return $http.get('http://194.116.72.47:7000/api/accounts/getBalance?address='+address)
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
            return $http.get('http://194.116.72.47:7000/api/delegates?getActive')
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
            return $http.get('http://194.116.72.38:7000/api/accounts/delegates/?address='+address)
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
            return $http.get('http://194.116.72.47:7000/api/delegates/voters?publicKey='+public_key)
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
            return $http.get('http://194.116.72.47:7000/api/accounts/getPublicKey?address='+address)
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
            return $http.get('http://194.116.72.47:7000/api/accounts?address='+address)
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
            return $http.get('http://194.116.72.47:7000/api/blocks/getHeight')
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
        getSynchronisationStatus: function(client_ip) {
            return $http.get(client_ip+'/api/loader/status/sync')
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
        }
    }
}]);