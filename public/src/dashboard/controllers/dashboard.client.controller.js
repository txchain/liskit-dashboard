/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.controller('DashboardController', ['$scope', 'LiskServices','$http',
    function($scope, LiskServices, $http) {
        var liskit_address = '10310263204519541551L';
        $scope.voters_account = [];

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
            LiskServices.getBalance(address).then(function (balance) {
                console.log('getBalance function success');
                console.log(balance);
                $scope.balance = balance.balance;
            }, function (error) {
                console.log('getBalance function error');
                console.log(data);
            });
        };

        $scope.getDelegateStats = function(address) {
            console.log('Loading getDelegateStats function');
            LiskServices.getDelegateStats().then(function (delegates) {
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
            }, function (data) {
                console.log('getDelegateStats function error');
                console.log(data);
            });
        };

        $scope.getNumberOfVoters = function(address) {
            console.log('Loading getNumberOfVoters function');
            // getting the public key
            LiskServices.getPublicKey(address).then(function (public_key) {
                //console.log('Public key');
                //console.log(public_key);
                var public_key = public_key.publicKey;
                LiskServices.getVoters(public_key).then(function(voters) {
                    //console.log('Voters');
                    //console.log(voters);
                    $scope.voters = voters.accounts;
                    $scope.number_of_voters = $scope.voters.length;
                })
            }, function(data) {
                console.log('getPublicKey function error');
                console.log(data);
            })
        };

        $scope.getVotersAndAccount = function(address) {
            console.log('Loading getVotersAndAccount function');
            // getting the public key
            LiskServices.getPublicKey(address).then(function (public_key) {
                var public_key = public_key.publicKey;
                LiskServices.getVoters(public_key).then(function(voters) {
                    $scope.voters = voters.accounts;
                    //ToDo get the account info for each voter
                    angular.forEach($scope.voters, function(voter){
                        //console.log('Voter address', voter.address);
                        LiskServices.getAccount(voter.address).then(function(voter_account) {
                            console.log('Voter account', voter_account);
                            $scope.voters_account.push(voter_account.account);
                        }, function(data) {
                            console.log('getAccount function error');
                            console.log(data);
                        });
                    });
                    console.log('Voters array', $scope.voters_account);
                }, function(data) {
                console.log('getVoters function error');
                console.log(data);
                })
            }, function(data) {
                console.log('getPublicKey function error');
                console.log(data);
            })
        };

        $scope.getBalance(liskit_address);
        $scope.getNumberOfVoters(liskit_address);
        $scope.getDelegateStats(liskit_address);
        $scope.getVotersAndAccount(liskit_address);
    }]);
