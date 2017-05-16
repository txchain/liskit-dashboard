env.factory('EnvServices', [function() {
    return {
        poolAddress: '14621643025887137539L',
        backEndIp: 'http://194.116.72.33:5000',
        openApiNodeIp:'http://194.116.72.33:7000',
        dynamicPool: false,

        // make attention that 100 - maintenancePerc -  topXXperc it's > 0
        top20perc: 50,
        top50perc: 30,
        top101perc: 20,
        staticPerc: 20,

        maintenancePerc: 30,

        swapHolding: 0
    }
}]);
