env.factory('EnvServices', [function() {
    return {
        poolAddress: '10310263204519541551L',
        backEndIp: 'http://194.116.72.47:5000',
        openApiNodeIp:'http://liskworld.info:8000',
        dynamicPool: false,

        // make attention that 100 - maintenancePerc -  topXXperc it's > 0
        top20perc: 50,
        top50perc: 30,
        top101perc: 20,
        staticPerc: 20,

        maintenancePerc: 30,

        swapHolding: 60000
    }
}]);
