/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.controller('DashboardController', ['$scope', 'DashboardServices','$http',
    function($scope, DashboardServices, $http) {
        liskitAddress = '10310263204519541551L';

        var uptime_graph_config = liquidFillGaugeDefaultSettings();
            uptime_graph_config.circleColor = "#94A9BE";
            uptime_graph_config.textColor = "#94A9BE";
            uptime_graph_config.textSize = 0.55;
            uptime_graph_config.waveTextColor = "#fff";
            uptime_graph_config.waveColor = "rgba(148, 169, 190, 0.72)";
            uptime_graph_config.circleThickness = 0.1;
            uptime_graph_config.circleFillGap = 0.2;
            uptime_graph_config.textVertPosition = 0.5;
            uptime_graph_config.waveAnimateTime = 2000;
            uptime_graph_config.waveHeight = 0.3;
            uptime_graph_config.waveCount = 1;

        $scope.getBalance = function(address) {
            console.log('Loading getBalance function');
            DashboardServices.getBalance(address).success(function (balance) {
                console.log('getBalance function success');
                console.log(balance);
                $scope.balance = balance.balance;
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
                            var uptime_graph = loadLiquidFillGauge("uptime", value.productivity, uptime_graph_config);
                            $scope.rank = value.rate;
                            console.log(value);
                        }
                    });
                });
            }).error(function (data) {
                console.log('getDelegateStats function error');
                console.log(data);
            });
        };

        //ToDo get number of supporter getNumberOfVoters

        $scope.getBalance(liskitAddress);
        $scope.getDelegateStats(liskitAddress);
    }]);
