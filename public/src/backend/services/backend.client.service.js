backend.factory('BackendServices', ['$http', '$q', 'EnvServices', function($http, $q, EnvServices) {

    var ip = EnvServices.backEndIp;

    // will all return promise objects
    return {
        getForgingInfo: function(address) {
            console.log('Address for our backend: ', address);
            return $http.get(ip + '/getforginginfo/'+address)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getForgingInfo backend service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getForgingInfo backend service promise rejected');
                    return $q.reject(response.data);
                });
        },
        getLastPayoutInfo: function() {
            return $http.get(ip + '/getlastpayout/')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getLastPayoutInfo backend service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getLastPayoutInfo backend service promise rejected');
                    return $q.reject(response.data);
                });
        }
    }
}]);
