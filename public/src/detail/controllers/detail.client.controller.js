detail.controller('DetailController', ['$scope', 'BackendServices',
    function($scope, BackendServices) {
        console.log("DetailController");
        BackendServices.getForgingInfo($scope.address_forging);
    }]);
