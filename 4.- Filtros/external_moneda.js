angular.module('myApp', []).controller('costCtrl', function($scope){
	$scope.num1 = "0",
	$scope.num2 = "0",
	$scope.total = function() {
		return $scope.num1 * $scope.num2;
	}
});

			
