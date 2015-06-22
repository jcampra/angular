angular.module('myApp', []).controller('namesCtrl',

	function($scope){

		$scope.names = [
			{name: 'Pepi', age:'99'},
			{name: 'Pepa', age:'11'},
			{name: 'Pepe', age:'22'},
			{name: 'Rudolf', age:'12'}
		];
});