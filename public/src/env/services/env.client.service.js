env.factory('EnvServices', [function() {
    return {
        poolAddress: '14621643025887137539L',
        backEndIp: 'http://194.116.72.33:5000',
        openApiNodeIp:'http://liskworld.info:8000',
        dynamicPool: false,
        top20perc: 0.5,
        top50perc: 0.3,
        top101perc: 0.2,
        staticPerc: 0.2
    }
}]);
