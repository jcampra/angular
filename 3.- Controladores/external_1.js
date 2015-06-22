angular.module('myApp', []).controller('personCtrl', function($scope){
	$scope.firstName = "Anacleto",
	$scope.lastName = "Villano",
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	}
});