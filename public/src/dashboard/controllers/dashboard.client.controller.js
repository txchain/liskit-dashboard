/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.controller('DashboardController', ['$scope', 'DashboardServices','$http',
    function($scope, DashboardServices, $http) {
        liskitAddress = '10310263204519541551L';

        $scope.getBalance = function() {
            console.log('Loading getBalance function');
            DashboardServices.getBalance(liskitAddress).success(function (balance) {
                console.log('getBalance function success');
                console.log(balance)
            }).error(function (data) {
                console.log('getBalance function error');
                console.log(data);
            });
        };
        $scope.getBalance();
    }]);
