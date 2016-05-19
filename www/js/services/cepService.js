angular.module('starter.controller')
.service('cepService',['$http', '$q', '$ionicLoading', function($http, $q, $ionicLoading){
	var get = function(cep){

		return $q(function(resolve, reject){
			$ionicLoading.show({
      		template: 'Buscando...'
    		});

			var promise = $http.get('https://viacep.com.br/ws/' + cep +  '/json/');
			promise.then(function(data){
				$ionicLoading.hide();
				resolve(data.data);
			});

			promise.catch(function(err){
				$ionicLoading.hide();
				reject(err);
			})
			
		})		
	}

	return {
		get: get
	}
}])

		