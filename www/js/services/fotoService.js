angular.module('starter.controller')
.service('fotoService',['$http', '$q', '$ionicLoading', function($http, $q, $ionicLoading){
	var criar = function(dados){

		return $q(function(resolve, reject){
			$ionicLoading.show({
      		template: 'Salvando...'
    		});

			var promise = $http.post('http://ccuanexos.herokuapp.com/foto', dados);
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