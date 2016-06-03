/**
 * Created by andreafspeziale on 16/04/16.
 */
exchange.factory('ExchangeServices', ['$http', '$q', function($http, $q) {
    // will all return promise objects
    return {
        getTicker: function(exchange, altcoin) {
            if(exchange == 'polo' && altcoin!=''){
                return $http.get('https://poloniex.com/public?command=returnTicker').then(function(response) {
                        if (typeof response.data === 'object') {
                                if(response.data['BTC_'+altcoin]) {
                                    return response.data['BTC_'+altcoin];
                                } else {
                                    data = {'msg':'ERROR, altcoin not found'}
                                    return $q.reject(data);
                                }
                        } else {
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        return $q.reject(response.data);
                });
            } else {
                return $q.reject(response={'msg':'ERROR, exchange not supported'});
            }
        }
    }
}]);
