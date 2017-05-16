detail.controller('DetailController', ['$scope', 'BackendServices','moment','usSpinnerService','LiskServices',
    function($scope, BackendServices,moment,usSpinnerService,LiskServices) {
<<<<<<< HEAD

        var myAddress = EnvServices.poolAddress;

=======
        var myAddress = '10310263204519541551L';
>>>>>>> 8476de08d0885ac87f3ecc08539089682a858fd4
        usSpinnerService.spin('spinner-forging-header');

        console.log("DetailController");

        $scope.covertTime =function (date) {
            var response = moment.unix(date+1464109200).format('DD/MM/YYYY');
            console.log(response)
            return response
        };

        BackendServices.getForgingInfo($scope.address_forging).then(function(response) {
            usSpinnerService.stop('spinner-forging-header');
            $scope.forgigInfo = response.result;
        }, function (error) {
            console.log('getForgingInfo function error');
            console.log(error);
        });


        LiskServices.getTransactions(myAddress,$scope.address_forging).then(function(list) {
            $scope.transactions = list.transactions;
        }, function (error) {
            console.log('getTransactions function error');
            console.log(error);
        });

    }]);
