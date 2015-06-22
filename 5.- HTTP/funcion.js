/*angular.module('myApp', []).controller('namesCtrl',

	function($scope){

		$scope.names = [
			{name: 'Pepi', age:'99'},
			{name: 'Pepa', age:'11'},
			{name: 'Pepe', age:'22'},
			{name: 'Rudolf', age:'12'}
		];
});*/

angular.module('myApp', []);
app.controller('clientesCtrl', function($scope, $http){
				$http.get("http://www.w3schools.com/angular/customers.php").success(function(response){$scope.names = response.records;});
			});