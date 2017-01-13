angular.module('phonecatApp').config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider
	.when('/phones', {
		template:'<phone-list></phone-list>'
	})
	.when('/phones/:phoneId',{
		template: '<phone-detail></phone-detail>'

	})

	// .when('/404',{
		// templeUrl:
		// controller:
	// });

	.otherwise('/phones');

	/*.otherwise({

		redirectTo: '/404'
	})*/

}

]);