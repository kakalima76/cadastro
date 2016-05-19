angular.module('starter.controller')
.directive('uiResidencial', [function(){
	// Runs during compile
	return {
		require: 'ngModel',


		
		link: function(scope, element, attrs, ctrl) {
			

			var formata = function(numero){
				var numero = numero.replace(/[^0-9\(\)\- ]+/g, "").replace('((', "");

				if(numero.length === 1){
					numero = '(' + numero.substring(0) + numero.substring(1);
				}

				if(numero.length === 3){
					numero = numero.substring(0) + ')' + numero.substring(3);
				}

				if(numero.length === 8){
					numero = numero.substring(0) + '-' + numero.substring(8);
				}

				
				return numero;

			}


			element.bind("keyup", function(){
				ctrl.$setViewValue(formata(ctrl.$viewValue));
				ctrl.$render();
			})
		}
	};
}]);