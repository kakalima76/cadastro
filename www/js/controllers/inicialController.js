angular.module('starter.controller')
.controller('inicialCtrl', ['$scope', '$state', 'inscritoFactory', 'numeroService', function($scope, $state, inscritoFactory, numeroService){
	$scope.desabilitado = true;

	function limpar(){
		$scope.inscricao = null;
		$scope.processo = null;
		$scope.desabilitado = true;
	}

	$scope.doRefresh = function(){
		var promise = numeroService.buscar();
		promise.then(function(data){
			$scope.inscricao = data.numero + 1;
			$scope.processo = data.processo + 1;
		})

		$scope.showProsseguir = true;
		$scope.$broadcast('scroll.refreshComplete');
	}

	$scope.prosseguir = function(){
		$state.go('titular');
		inscritoFactory.setInicial($scope.inscricao, $scope.processo);
		limpar();
	}
	
}])