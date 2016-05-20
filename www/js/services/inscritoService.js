angular.module('starter.controller')
.service('inscritoService',['$http', '$q', '$ionicLoading', function($http, $q, $ionicLoading){
	var criar = function(dados){

		return $q(function(resolve, reject){
			$ionicLoading.show({
      		template: 'Salvando...'
    		});

			var promise = $http.post('http://ccuanexos.herokuapp.com/cadastro', dados);
			promise.then(function(){
				$ionicLoading.hide();
				resolve('salvo');
			});

			promise.catch(function(err){
				$ionicLoading.hide();
				reject(err);
			})
			
		})		
	}

	return {
		criar: criar
	}
}])