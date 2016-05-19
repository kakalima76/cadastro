angular.module('starter.controller')
.controller('inicialCtrl', ['$scope', '$state', function($scope, $state){

	$scope.desabilitado = true;
	$scope.inscricao = 0;
	$scope.processo = 180000;

	$scope.doRefresh = function(){
		$scope.inscricao += 1;
		$scope.processo += 1;
		$scope.showProsseguir = true;
		$scope.$broadcast('scroll.refreshComplete');
	}

	$scope.prosseguir = function(){
		$state.go('titular');
	}
}])