angular.module('starter.controller')
.controller('auxiliarCtrl', ['$scope', 'identidadeService', '$state', 'inscritoFactory', 'inscritoService', function($scope, identidadeService, $state, inscritoFactory, inscritoService){
$scope.orgaos = identidadeService.get();


	function limpar(){
		document.getElementById('cpf2').value = null;
		document.getElementById('nome2').value = null;
		document.getElementById('identidade2').value = null;
		document.getElementById('emissor2').value = null;
	}
	
	var verifica = function(){
		var cpf = null;
		var nome = null;
		var identidade = null;
		var emissor = null;


	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
		}

		if(!isEmpty(document.getElementById('cpf2').value)){
			cpf = document.getElementById('cpf2').value;
		}else{
			cpf = '';
		}

		if(!isEmpty(document.getElementById('nome2').value)){
			nome = document.getElementById('nome2').value;
		}else{
			nome = '';
		}

		if(!isEmpty(document.getElementById('identidade2').value)){
			identidade = document.getElementById('identidade2').value;
		}else{
			identidade = '';
		}

		if(!isEmpty(document.getElementById('emissor2').value)){
			emissor = document.getElementById('emissor2').value;
		}else{
			emissor = '';
		}

		if((cpf  && nome && identidade && emissor) !== ''){
			$scope.showProsseguir = true;
		}else{
			$scope.showProsseguir = false;
		}

		return {
			cpf: cpf,
			nome: nome,
			identidade: identidade,
			emissor: emissor
		}
	}//fim da função verifica 
	

	$scope.limpaCpf = function(){
		document.getElementById('cpf2').value = null;
	}

	$scope.testaForm = function(){
		verifica();
	}



	//segue para a página de cadastro de qualificações secundárias
	$scope.prosseguir = function(){
		var aux = verifica();
		if(aux.emissor === '?'){
			aux.emissor = '';
		}

		inscritoFactory.setAuxiliar(aux.cpf, aux.nome, aux.identidade, aux.emissor);
		limpar();
		$state.go('fotoAuxiliar');
	}

	$scope.finalizar = function(){
		//posteriormente tratar o erro da promise!!!
		var aux = verifica();
		if(aux.emissor === '?'){
			aux.emissor = '';
		}

		inscritoFactory.setAuxiliar(aux.cpf, aux.nome, aux.identidade, aux.emissor);
		
		var promise = inscritoService.criar(inscritoFactory.get());
		promise.then(function(){
			inscritoFactory.reseta();
			limpar();
			$state.go('inicial');
		})
		
	}

}])