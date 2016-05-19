angular.module('starter.controller')
.directive('uiCpf', [function(){
	// Runs during compile
	return {
		require: 'ngModel',


		
		link: function(scope, element, attrs, ctrl) {
			function TestaCPF(strCPF) {
			    var Soma;
			    var Resto;
			    Soma = 0;

				if (strCPF == "00000000000") return false;
			    
				for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
				Resto = (Soma * 10) % 11;
				
			    if ((Resto == 10) || (Resto == 11))  Resto = 0;
			    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
				
				Soma = 0;
			    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
			    Resto = (Soma * 10) % 11;
				
			    if ((Resto == 10) || (Resto == 11))  Resto = 0;
			    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
			    return true;
			}


			var formata = function(cpf){
				cpf = cpf.replace(/[^0-9.-]+/g, "");

				if(cpf.length === 3){
					cpf = cpf.substring(0,3) + '.' + cpf.substring(3);
				}

				if(cpf.length === 7){
					cpf = cpf.substring(0,7) + '.' + cpf.substring(7);
				}

				if(cpf.length === 11){
					cpf = cpf.substring(0,11) + '-' + cpf.substring(11,14);
				}

				if(cpf.length === 14){
					if(!TestaCPF(cpf.replace(/[^0-9]+/g, ""))){
						alert('CPF inválido!');
					}
				}

				return cpf;

			}


			element.bind("keyup", function(){
				ctrl.$setViewValue(formata(ctrl.$viewValue));
				ctrl.$render();
			})
		}
	};
}]);
