(function() {
  'use strict';

  angular

    .module("pick6")

    .directive('raceResults',raceResults);


    function raceResults() {
      return {
        restrict: 'E'
        , transclude: true
        , replace: true
        , scope: true
        , controller: 'raceResultsController'
        , controllerAs: 'rr'
        , templateUrl: 'app/raceResults/raceResults.html'
      };
    }
})();

