angular.module('Commom.Route', [
	'ngResource',
	'ngRoute',
	'commomController'])
                               
	.config(['$routeProvider', function($routeProvider) {
		
		$routeProvider
			.when('/', {
				templateUrl : 'templates/home.html', 
				controller : 'HomeController'
			});
	}]);