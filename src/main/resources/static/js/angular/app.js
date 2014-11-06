var appPath = location.pathname;

angular.module('app', [
	'ngResource',
	'ngRoute',
	'Commom.Route',
	'Commom.Directives',
	'Commom.Factory'])

	.config(['$httpProvider', function($httpProvider) {

        $httpProvider.interceptors.push('securityInterceptor');
        
	}]);