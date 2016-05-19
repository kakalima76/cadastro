angular.module('starter.controller')
.controller('secundariaCtrl', ['$scope', 'cepService', '$state', function($scope, cepService, $state){

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


	//segue para a página de cadastro de produtos
	$scope.prosseguir = function(){
		$state.go('produtos');
	}

}])