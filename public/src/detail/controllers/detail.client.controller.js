detail.controller('DetailController', ['$scope', 'BackendServices',
    function($scope, BackendServices) {
        console.log("DetailController");
        BackendServices.getForgingInfo($scope.address_forging);

        // $scope.transactions = BackendServices.getTransactions($scope.address_forging);
        // console.log($scope.transactions);

        BackendServices.getTransactions($scope.address_forging).then(function(list) {
            $scope.transactions = list.transactions;
            console.log($scope.transactions);
        }, function (error) {
            console.log('getTransactions function error');
            console.log(error);
        });

    }]);
