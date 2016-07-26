var calculator = angular.module('calculator', []);

calculator.controller('ctrl1', function($scope) {
	$scope.num1 = 0;
	$scope.num2 = 0;

	$scope.add = function() {
		$scope.calculation = $scope.num1 + ' + ' + $scope.num2 + ' = ' + (+$scope.num1 + +$scope.num2);
	};

	$scope.subtract = function() {
		$scope.calculation = $scope.num1 + ' - ' + $scope.num2 + ' = ' + (+$scope.num1 - +$scope.num2);
	};

	$scope.multiply = function() {
		$scope.calculation = $scope.num1 + ' * ' + $scope.num2 + ' = ' + (+$scope.num1 * +$scope.num2);
	};

	$scope.divide = function() {
		$scope.calculation = $scope.num1 + ' / ' + $scope.num2 + ' = ' + (+$scope.num1 / +$scope.num2)
	}
});