angular.module('starter.controller')
.controller('fotoTitularCtrl', ['$scope', '$state', function($scope, $state){
	$scope.fotografar = function(){
		$scope.showSalvar = true;
		$scope.showFotografar = true;
	}

	$scope.salvar = function(){
		$state.go('titular');
	}
}])