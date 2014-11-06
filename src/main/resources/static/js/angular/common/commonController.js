angular.module('commomController', [])

	.controller('HomeController', ['$scope', '$http', function($scope, $http) {
		
		$scope.welcomeMsg = "Welcome!";
		
	}]);