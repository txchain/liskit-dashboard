detail.controller('DetailController', ['$scope', 'BackendServices','moment',
    function($scope, BackendServices,moment) {
        console.log("DetailController");

        $scope.covertTime =function (date) {
            var response = moment.unix(date+1464109200).format('DD/MM/YYYY');
            console.log(response)
            return response
        };

        BackendServices.getForgingInfo($scope.address_forging);


        BackendServices.getTransactions($scope.address_forging).then(function(list) {
            $scope.transactions = list.transactions;
        }, function (error) {
            console.log('getTransactions function error');
            console.log(error);
        });

    }]);
