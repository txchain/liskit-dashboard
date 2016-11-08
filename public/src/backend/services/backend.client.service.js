backend.factory('BackendServices', ['$http', '$q', function($http, $q) {
    // your ip
    var ip = '';
    // will all return promise objects
    return {
        getForgingInfo: function(address) {
            console.log('Address for our backend: ', address);
        }
            /*
            return $http.get(ip+'/api/getForgingInfo?address='+address)
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
        }*/
    }
}]);
