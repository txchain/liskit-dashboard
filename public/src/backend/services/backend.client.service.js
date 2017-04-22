backend.factory('BackendServices', ['$http', '$q', function($http, $q) {
    // your ip
    var ip = 'http://194.116.72.33:7000';
    var local = 'http://127.0.0.1:5000'

    // will all return promise objects
    return {
        getForgingInfo: function(address) {
            console.log('Address for our backend: ', address);
            return $http.get(local + '/getforginginfo/'+address)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        console.log('getForgingInfo lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log('getForgingInfo lisk service promise rejected');
                    return $q.reject(response.data);
                });
        }/*,
        getTransactions: function (recipient) {
            console.log(recipient)
            return $http.get(ip + '/aaapi/transactions?senderId=' + myAddress + '&AND:recipientId=' + recipient + '&orderBy=timestamp:desc')
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        console.log(response.data);
                        return response.data;
                    } else {
                        console.log('getTransactions lisk service invalid response from API');
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    console.log(response)
                    console.log('getTransactions lisk service promise rejected');
                    return $q.reject(response.data);
                });
        }*/
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
