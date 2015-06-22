angular.module('myApp', []).controller('personCtrl', function($scope){
	$scope.firstName = "AnAclEtO",
	$scope.lastName = "VIllAnO",
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	}
});