angular.module('starter.controller')
.service('numeroService',['$http', '$q', '$ionicLoading', function($http, $q, $ionicLoading){
	
	//essa função busca busca o último número usado e salva um novo número incrementado de uma
	var buscar = function(){

		return $q(function(resolve, reject){

			$ionicLoading.show({
      		template: 'Aguarde...'
    		});
			var promise = $http.get('http://ccuanexos.herokuapp.com/numero');
			promise.then(function(data){
				//envio para o controller o último registro não incrementado
				resolve(data.data[0]);
				var numero =
				{
					numero: data.data[0].numero + 1,
					processo: data.data[0].processo + 1
				}

				//salva o novo registro incrementado no db
				$http.post('http://ccuanexos.herokuapp.com/numero', numero)
				.then(function(){
					$ionicLoading.hide();
				})
				.catch(function(){
					$ionicLoading.hide();
					alert('falha no servidor');
				})

			});

			promise.catch(function(err){
				$ionicLoading.hide();
				reject(err);
			})

			
		})		

	}//fim do método buscar

	return {
		buscar: buscar
	}
}])