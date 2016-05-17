/**
 * Created by andreafspeziale on 13/04/16.
 */
dashboard.controller('DashboardController', ['$scope', 'LiskServices','$http',
    function($scope, LiskServices, $http) {

        /**
         * Vars
         */

        var liskit_address = '10310263204519541551L';
        var liskit_test_ip = 'http://194.116.72.38:7000';
        $scope.voters_account = [];
        $scope.guest_address = '';
        $scope.delegates = [];
        $scope.delegates_total_balance = 0;
        $scope.pagination = {
            currentPage : 1,
            itemsPerPage :10,
            maxSize : 3
        };

        /**
         * Graph config
         */

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

        /**
         * Pagination handler
         */

        $scope.pageChanged = function() {
            $log.log('Page changed to: ' + $scope.pagination.currentPage);
        };

        /**
         * Dashboard functions
         */

        $scope.getBalance = function(address) {
            //console.log('Loading getBalance function');
            LiskServices.getBalance(address).then(function (balance) {
                //console.log(balance);
                $scope.balance = balance.balance/10000/10000;
            }, function (error) {
                console.log('getBalance function error');
                console.log(error);
            });
        };

        $scope.getDelegateList = function() {
          LiskServices.getDelegates().then(function(list) {
                $scope.delegates = list.delegates;
                console.log($scope.delegates);
            }, function (error) {
                console.log('getDelegates function error');
                console.log(error);
            });
        };

        //ToDo make it useful
        $scope.getDelegateStats = function(address) {
            //console.log('Loading getDelegateStats function');
            LiskServices.getDelegateStats().then(function (delegates) {
                $scope.total_delegate = delegates.totalCount;
                angular.forEach(delegates, function(delegate){
                    //console.log('delegate', delegate);
                    angular.forEach(delegate, function(value){
                        if(value.address==address) {
                            /*$scope.productivity =  value.productivity;
                            var uptime_graph = loadLiquidFillGauge("uptime", $scope.productivity, uptime_graph_config);
                            $scope.rank = value.rate;
                            console.log(value);*/
                        };
                    });
                });
            }, function (data) {
                console.log('getDelegateStats function error');
                console.log(data);
            });
        };

        // Turn Around
        $scope.getVotesOfAccount = function(address) {
            LiskServices.getVotesOfAccount(address).then(function (delegates) {
                angular.forEach(delegates.delegates, function(delegate){
                    if(delegate.address == liskit_address){
                        $scope.rank = delegate.rate;
                        $scope.productivity =  delegate.productivity;
                        if($scope.productivity != 0 )
                            var uptime_graph = loadLiquidFillGauge("uptime", $scope.productivity, uptime_graph_config);
                    }
                });
            }, function (data) {
                console.log('getDelegateStats function error');
                console.log(data);
            });
        };

        $scope.totalDelegatesForged = function() {
            LiskServices.getDelegateStats().then(function (delegates) {
                angular.forEach(delegates, function(delegate){
                    angular.forEach(delegate, function(value){
                        LiskServices.getBalance(value.address).then(function (balance) {
                            $scope.delegates_total_balance = $scope.delegates_total_balance + balance.balance/10000/10000;
                        }, function (error) {
                            console.log('totalDelegatesForged function error');
                            console.log(data);
                        });
                    });
                });
            }, function (data) {
                console.log('totalDelegatesForged function error');
                console.log(data);
            });
        };

        $scope.getNumberOfVoters = function(address) {
            //console.log('Loading getNumberOfVoters function');
            LiskServices.getPublicKey(address).then(function (public_key) {
                var public_key = public_key.publicKey;
                LiskServices.getVoters(public_key).then(function(voters) {
                    $scope.voters = voters.accounts;
                    $scope.number_of_voters = $scope.voters.length;
                })
            }, function(data) {
                console.log('getPublicKey function error');
                console.log(data);
            })
        };

        $scope.getVotersAndAccount = function(address) {
            $scope.guest_voters_account = [];
            $scope.error_message = '';
            console.log('Loading getVotersAndAccount function', address);
            LiskServices.getDelegates().then(function(list) {
                $scope.delegates = list.delegates;
                console.log("Delegates: ", $scope.delegates);
                LiskServices.getPublicKey(address).then(function (public_key) {
                    if (public_key.success == true) {
                        var public_key = public_key.publicKey;
                        LiskServices.getVoters(public_key).then(function (voters) {
                            if (voters.accounts.length) {
                                $scope.voters = voters.accounts;
                                console.log("Voters: ", $scope.voters);
                                for(j = 0; j<$scope.voters.length; j++) {
                                    var flag = 0;
                                    for(var i = 0; i<$scope.delegates.length; i++) {
                                        if($scope.delegates[i].address == $scope.voters[j].address) {
                                            var tmp = $scope.voters[j];
                                            tmp.rate = $scope.delegates[i].rate;
                                            if (address == liskit_address) {
                                                $scope.voters_account.push(tmp);
                                            }
                                            if (address != liskit_address) {
                                                $scope.guest_voters_account.push(tmp);
                                            }
                                            flag = 1;
                                            break;
                                        }
                                    }
                                    if(flag==0){
                                        if (address == liskit_address) {
                                            $scope.voters_account.push($scope.voters[j]);
                                        }
                                        if (address != liskit_address) {
                                            $scope.guest_voters_account.push($scope.voters[j]);
                                        }
                                    }
                                }
                            } else {
                                toastr.warning("This address doesn't have any supporter");
                                $scope.guest_voters_account = [];
                                $scope.guestFilterSearch = '';
                            }
                        }, function (data) {
                            console.log('getVoters function error');
                            console.log(data);

                        })
                    } else {
                        $scope.guest_voters_account = [];
                        $scope.guestFilterSearch = '';
                        $scope.guest_address = '';
                        $scope.error_message = public_key.error;
                        toastr.warning(public_key.error);
                    }
                }, function (data) {
                    console.log('getPublicKey function error');
                    console.log(data);
                })
            }, function (error) {
                console.log('getDelegates function error');
                console.log(error);
            })
        };

        $scope.getBlockChainHeight = function() {
            //console.log('Loading getVotersAndAccount function');
            LiskServices.getBlockChainHeight().then(function(blockchain_height) {
                $scope.blockchain_height = blockchain_height.height;
            }, function(data) {
                console.log('getBlockChainHeight function error');
                console.log(data);
            });
        };

        $scope.getSynchronisationStatus = function(client_ip) {
            //console.log('Loading getSynchronisationStatus function');
            LiskServices.getSynchronisationStatus(client_ip).then(function(status) {
                $scope.status = status.success.toString();
            }, function(data) {
                console.log('getSynchronisationStatus function error');
                console.log(data);
            });
        };

        /**
         * Run
         */
        $scope.getBlockChainHeight();
        $scope.getBalance(liskit_address);
        $scope.getNumberOfVoters(liskit_address);
        $scope.getDelegateStats(liskit_address);
        $scope.getVotersAndAccount(liskit_address);
        $scope.getVotesOfAccount(liskit_address);
        $scope.totalDelegatesForged();
        $scope.getSynchronisationStatus(liskit_test_ip);
    }])
    /**
     * Pagination custom filter
     */
    .filter('startFrom', function() {
        return function(input, start) {
            start = +start;
            return input.slice(start);
        }
    });
