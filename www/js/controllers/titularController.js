angular.module('starter.controller', [])
.controller('titularCtrl', ['$scope', '$state', 'identidadeService', function($scope, $state, identidadeService){
	$scope.orgaos = identidadeService.get();

	$scope.testaForm = function(){
		var cpf = null;
		var nome = null;
		var identidade = null;
		var orgao = null;


		function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
		}

		if(!isEmpty(document.getElementById('cpf').value)){
			cpf = document.getElementById('cpf').value;
		}

		if(!isEmpty(document.getElementById('nome').value)){
			nome = document.getElementById('nome').value;
		}

		if(!isEmpty(document.getElementById('identidade').value)){
			identidade = document.getElementById('identidade').value;
		}

		if(!isEmpty(document.getElementById('orgao').value)){
			orgao = document.getElementById('orgao').value;
		}

		if((cpf && nome && identidade && orgao) !== null){
			$scope.showProsseguir = true;
		}else{
			$scope.showProsseguir = false;
		}

	}

	//segue para a página de cadastro de qualificações secundárias
	$scope.prosseguir = function(){
		$state.go('secundaria');
	}

	$scope.doRefresh = function(){
		$state.go('fotoTitular')
		$scope.$broadcast('scroll.refreshComplete');
	}

}])