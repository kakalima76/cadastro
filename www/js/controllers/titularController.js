angular.module('starter.controller', [])
.controller('titularCtrl', ['$scope', '$state', 'identidadeService', 'inscritoFactory', 'inscritoFactory', function($scope, $state, identidadeService, inscritoFactory, inscritoFactory){
	$scope.orgaos = identidadeService.get();


	function limpar(){
		document.getElementById('cpf').value = null;
		document.getElementById('nome').value = null;
		document.getElementById('identidade').value = null;
		document.getElementById('emissor').value = null;
	}

	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
		}

	$scope.testaForm = function(){
		var cpf = null;
		var nome = null;
		var identidade = null;
		var orgao = null;	

		if(!isEmpty(document.getElementById('cpf').value)){
			cpf = document.getElementById('cpf').value;
		}

		if(!isEmpty(document.getElementById('nome').value)){
			nome = document.getElementById('nome').value;
		}

		if(!isEmpty(document.getElementById('identidade').value)){
			identidade = document.getElementById('identidade').value;
		}

		if(!isEmpty(document.getElementById('emissor').value)){
			orgao = document.getElementById('emissor').value;
		}

		if((cpf && nome && identidade && orgao) !== null){
			$scope.showProsseguir = true;
		}else{
			$scope.showProsseguir = false;
		}

	}

	//segue para a página de cadastro de qualificações secundárias
	
	$scope.limpaCpf = function(){
		document.getElementById('cpf').value = null;
	}

	$scope.prosseguir = function(){
		var cpf = null;
		var nome = null;
		var identidade = null;
		var emissor = null;	

		if(!isEmpty(document.getElementById('cpf').value)){
			cpf = document.getElementById('cpf').value;
		}

		if(!isEmpty(document.getElementById('nome').value)){
			nome = document.getElementById('nome').value;
		}

		if(!isEmpty(document.getElementById('identidade').value)){
			identidade = document.getElementById('identidade').value;
		}

		if(!isEmpty(document.getElementById('emissor').value)){
			emissor = document.getElementById('emissor').value;
		}


		inscritoFactory.setTitular(cpf, nome, identidade, emissor);
		$state.go('fotoTitular');
		limpar();
	}

}])