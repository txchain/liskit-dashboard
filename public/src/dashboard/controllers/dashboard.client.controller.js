/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.controller('DashboardController', ['$scope', 'DashboardServices','$http',
    function($scope, DashboardServices, $http) {
        liskitAddress = '10310263204519541551L';

        $scope.getBalance = function(address) {
            console.log('Loading getBalance function');
            DashboardServices.getBalance(address).success(function (balance) {
                console.log('getBalance function success');
                console.log(balance);
            }).error(function (data) {
                console.log('getBalance function error');
                console.log(data);
            });
        };

        $scope.getDelegateStats = function(address) {
            console.log('Loading getDelegateStats function');
            DashboardServices.getDelegateStats().success(function (delegates) {
                console.log('getDelegateStats function success');
                angular.forEach(delegates, function(delegate){
                    angular.forEach(delegate, function(value){
                        if(value.address==address) {
                            console.log(value);
                        }
                    });
                });
            }).error(function (data) {
                console.log('getDelegateStats function error');
                console.log(data);
            });
        };

        $scope.getBalance(liskitAddress);
        $scope.getDelegateStats(liskitAddress);
    }]);
