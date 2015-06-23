angular.module('myApp', []).controller('namesCtrl',

	function($scope){

		$scope.names = [
			{name: 'Pepi', age:'99'},
			{name: 'Pepa', age:'55'},
			{name: 'Pepe', age:'22'}
		];
});