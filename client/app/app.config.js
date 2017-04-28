angular.module('app',[])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/parks/parks.html',
        controller: 'ParksController'
      })
      .when('/rides', {
        templateUrl: 'app/rides/rides.html',
        controller: 'RidesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
