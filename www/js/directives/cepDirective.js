angular.module('starter.controller')
.directive('uiCep', [function(){
	// Runs during compile
	return {
		require: 'ngModel',


		
		link: function(scope, element, attrs, ctrl) {
			

			var formata = function(cep){
				var cep = cep.replace(/[^0-9\(\)\-. ]+/g, "").replace('((', "");

				if(cep.length === 2){
					cep = cep.substring(0) + '.' + cep.substring(2);
				}

				if(cep.length === 6){
					cep = cep.substring(0) + '-' + cep.substring(6);
				}
				
				return cep;

			}


			element.bind("keyup", function(){
				ctrl.$setViewValue(formata(ctrl.$viewValue));
				ctrl.$render();
			})
		}
	};
}]);