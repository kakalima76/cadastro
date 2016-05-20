angular.module('starter.controller')
.controller('secundariaCtrl', ['$scope', 'cepService', '$state', 'inscritoFactory', function($scope, cepService, $state, inscritoFactory){

	//esse método busca um cpf e preenche os campos referentes aos endereços
	$scope.buscar = function(value){
		if(value.length < 10){
			$scope.bairro = null;
			$scope.cidade = null;
			$scope.endereco = null;
		}
		

		if(value.length === 10){

		var cep = value.replace(/[.-]/g, '');			
			var promisseCep = cepService.get(cep);
			promisseCep.then(function(data){
				if(!data.erro){
					$scope.bairro = data.bairro.toUpperCase();
					$scope.cidade = data.localidade.toUpperCase();
					$scope.endereco = data.logradouro.toUpperCase();

				}else{
					alert('CEP não localizado!');
				}
				
			});

			promisseCep.catch(function(){
				alert('CEP não localizado!');
			})

		}
	}

	function limpar(){
		document.getElementById('residencial').value = null;
		document.getElementById('celular').value = null;
		document.getElementById('radio').value = null;
		document.getElementById('email').value = null;
		document.getElementById('cep').value = null;
		document.getElementById('endereco').value = null;
		document.getElementById('bairro').value = null;
		document.getElementById('cidade').value = null;
		document.getElementById('numero').value = null;
		document.getElementById('complemento').value = null;
	}

	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
	}

	$scope.limpaResidencial = function(){
		document.getElementById('residencial').value = null;
	}
	
	$scope.limpaCelular = function(){
		document.getElementById('celular').value = null;
	}

	$scope.limpaRadio = function(){
		document.getElementById('radio').value = null;
	}

	$scope.limpaCep = function(){
		document.getElementById('cep').value = null;
	}


	//segue para a página de cadastro de produtos
	$scope.prosseguir = function(){
	var residencial = null;
	var celular = null;
	var radio = null;
	var email = null;
	var cep = null;
	var endereco = null;
	var bairro = null;
	var cidade = null;
	var numero = null;
	var complemento = null;

	if(!isEmpty(document.getElementById('residencial').value)){
		residencial = document.getElementById('residencial').value;
	}

	if(!isEmpty(document.getElementById('celular').value)){
		celular = document.getElementById('celular').value;
	}

	if(!isEmpty(document.getElementById('radio').value)){
		radio = document.getElementById('radio').value;
	}

	if(!isEmpty(document.getElementById('email').value)){
		email = document.getElementById('email').value;
	}

	if(!isEmpty(document.getElementById('cep').value)){
		cep = document.getElementById('cep').value;
	}

	if(!isEmpty(document.getElementById('endereco').value)){
		endereco = document.getElementById('endereco').value;
	}

	if(!isEmpty(document.getElementById('bairro').value)){
		bairro = document.getElementById('bairro').value;
	}

	if(!isEmpty(document.getElementById('cidade').value)){
		cidade = document.getElementById('cidade').value;
	}

	if(!isEmpty(document.getElementById('numero').value)){
		numero = document.getElementById('numero').value;
	}

	if(!isEmpty(document.getElementById('complemento').value)){
		complemento = document.getElementById('complemento').value;
	}
		inscritoFactory.setSecundaria
		(
			residencial,
			celular,
			radio,
			email,
			cep,
			endereco,
			bairro,
			cidade,
			numero,
			complemento
		)
		$state.go('produtos');
		limpar();
	}

}])