/**
 * Created by diegobecerra on 3/20/17.
 */
;(function() {

    function HomeController($scope, $log, $q, $location, buildsService) {
        var owlAPi;
        $scope.selectedtype = "for_rent";
        $scope.searchFilter = "";
        $scope.items = [
            'images/home-carrusel.jpg',
            'images/home-carrusel-02.jpg'
        ];

        $scope.properties = {
            // autoHeight:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            lazyLoad: true,
            items: 1,
            autoplay: true,
            dots: false,
            loop: true
        };

        $scope.ready = function ($api) {
            owlAPi = $api;
        };

        $scope.showData = function( ){

            $scope.datalists = [
                {"name": "Alquilar", "type": "for_rent"},
                {"name": "Comprar", "type": "for_sale"}
            ]
        };
        $scope.select= function(item) {
            $scope.selected = item;
            $scope.selectedtype = item.type;
        };
        $scope.isActive = function(item) {
            return $scope.selected === item;
        };

        // Search Bar
        $scope.changeView = function(){
            $location.path('/search').search({s: $scope.searchFilter, for: $scope.selectedtype}); // path not hash
        };

        $scope.builds = [];

        buildsService.getBuilds()
            .then(function(response) {
                if (typeof response.data === 'object') {
                    $scope.builds = response.data;
                } else {
                    // invalid response
                    return $q.reject(response.data);
                }
            }, function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });
    };

    HomeController.$inject = ['$scope', '$log', '$q', '$location', 'buildsService'];

    angular.module('amqApp')
        .controller('HomeController', HomeController);


})();
