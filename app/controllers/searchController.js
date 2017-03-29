/**
 * Created by diegobecerra on 3/24/17.
 */
(function() {

    var SearchController = function ($scope, $log, $q, $location, $routeParams, buildsService) {
        $scope.for = $location.search().for;
        $scope.query = $location.search().s;
        $scope.builds = [];

        buildsService.getBuilds()
            .then(function(response) {
                if (typeof response.data === 'object') {
                    for (var i=0,len=response.data.length;i<len;i++) {
                        if (response.data[i].for[0].type === $scope.for) {
                            $scope.builds.push(response.data[i]);
                            console.log(response.data[i]);
                        }
                    }
                } else {
                    // invalid response
                    return $q.reject(response.data);
                }
            }, function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });

        if ($scope.for == 'for_rent') {
            $scope.forTitle = 'Alquiler';
        } else {
            $scope.forTitle = 'Venta';
        }
    };

    SearchController.$inject = ['$scope', '$log', '$q', '$location', '$routeParams', 'buildsService'];

    angular.module('amqApp')
        .controller('SearchController', SearchController);

}());