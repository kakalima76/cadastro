angular.module('starter.controller')
.directive('uiCelular', [function(){
	// Runs during compile
	return {
		require: 'ngModel',


		
		link: function(scope, element, attrs, ctrl) {
			

			var formata = function(value){
				var numero = value.replace(/[^0-9\(\)\- ]+/g, "").replace('((', "");

				if(numero.length === 1){
					numero = '(' + numero.substring(0) + numero.substring(1);
				}

				if(numero.length === 3){
					numero = numero.substring(0) + ')' + numero.substring(3);
				}

				if(numero.length === 7){
					numero = numero.substring(0) + '-' + numero.substring(7);
				}

				if(numero.length === 11){
					numero = numero.substring(0) + '-' + numero.substring(11);
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