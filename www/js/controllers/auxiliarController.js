angular.module('starter.controller')
.controller('auxiliarCtrl', ['$scope', 'identidadeService', '$state', function($scope, identidadeService, $state){
$scope.orgaos = identidadeService.get();

	$scope.testaForm = function(){
		var cpf = null;
		var nome = null;
		var identidade = null;
		var orgao = null;


		function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
		}

		if(!isEmpty(document.getElementById('cpf2').value)){
			cpf = document.getElementById('cpf2').value;
		}

		if(!isEmpty(document.getElementById('nome2').value)){
			nome = document.getElementById('nome2').value;
		}

		if(!isEmpty(document.getElementById('identidade2').value)){
			identidade = document.getElementById('identidade2').value;
		}

		if(!isEmpty(document.getElementById('orgao2').value)){
			orgao = document.getElementById('orgao2').value;
		}

		if((cpf && nome && identidade && orgao) !== null){
			$scope.showProsseguir = true;
		}else{
			$scope.showProsseguir = false;
		}

	}

	//segue para a página de cadastro de qualificações secundárias
	$scope.prosseguir = function(){
		$state.go('imprimir');
	}

	$scope.doRefresh = function(){
		$state.go('fotoAuxiliar')
		$scope.$broadcast('scroll.refreshComplete');
	}
}])