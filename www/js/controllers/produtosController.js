angular.module('starter.controller')
.controller('produtosCtrl', ['$scope', '$state', '$ionicPopup', 'inscritoFactory', function($scope, $state, $ionicPopup, inscritoFactory){
	$scope.apoio = 'templates/permitidos.html';

	var produtos = 
	[
		{produto: 'artigos de artesanato'},
		{produto: 'artigos de de toucador'},
		{produto: 'artigos de de couro'},
		{produto: 'artigos de de plástico'},
		{produto: 'artigos de de armarinho'}, 
		{produto: 'peças de vestuário'}, 
		{produto: 'bijouteria'}, 
		{produto: 'quinquilharia'}, 
		{produto: 'souvenir'}, 
		{produto: 'brinquedo'}, 
		{produto: 'sandália'}, 
		{produto: 'tamanco e chinelo de fabricação caseira'}, 
		{produto: 'artigos de praia'},
		{produto: 'artigos de de beleza'}, 
		{produto: 'cigarro'},
		{produto: 'ficha de telefone'},
		{produto: 'planta ornamental'}, 
		{produto: 'planta medicinal'},
		{produto: 'planta frutífera'},
		{produto: 'flor natural e artificial'},
		{produto: 'serviços de funileiro'}, 
		{produto: 'chaveiro'},
		{produto: 'amolador'},
		{produto: 'fotógrafo'},
		{produto: 'empalhador'},
		{produto: 'conserto de guarda-chuvas'},
		{produto: 'engraxates'},
		{produto: 'bala e doces embalados'},
		{produto: 'artigos de limpeza'}, 
		{produto: 'pequenas ferragens'},
		{produto: 'miudezas de copa e cozinha'},
		{produto: 'artigos de papelaria'}, 
		{produto: 'artigos de escritório e escolar'}, 
		{produto: 'impresso'},
		{produto: 'imagem'},
		{produto: 'estampa'},
		{produto: 'folheto'},
		{produto: 'numismática'},
		{produto: 'livro'},
		{produto: 'revista'},
		{produto: 'disco usado'},
		{produto: 'bilhete de loteria e raspadinha'},
		{produto: 'artigos de alimentação'},
		{produto: 'obra de pintor e artista plástico'}
	]

	function compare(a,b) {
	  	if(a.produto < b.produto){
	  		return -1;
	  	}else if (a.produto > b.produto){
	  		return 1;
	  	}else{
	  		return 0;
	    }	 
	}

	$scope.produtos = produtos.sort(compare);


   //reseta os campos do checkbox
  	function zera(){
    	$scope.produtos.forEach(function(value){
      		value.checked = false;
    	})
  	}



  $scope.imprimir = function(){
    var produto = ''; //auto esplicativa
    var count = 0; //conta as autuações
    

    function filtro(value){
      if(value.checked === true){
        return true;
      }
    }
    
    //seleciona apenas as autuações ticadas
    var res = $scope.produtos.filter(filtro);
    
    res.forEach(function(value){
      count += 1;
      produto += '{produto: ' + "'" + value.produto + "'" + '},';
    })



          if(count > 0){

                if(count === 1){
                  var confirmPopup = $ionicPopup.confirm({
                  title: 'Salvar Registro',
                  template: 'Confirma apenas um produto?'
                  });
                }else{
                  var confirmPopup = $ionicPopup.confirm({
                  title: 'Salvar Registro',
                  template: 'Confirma os ' + count + ' produtos?'
                  });
                }
             
             confirmPopup.then(function(res) {
             if(res) {
                  produto = produto.substring(0,produto.length - 1);
                  zera();
                  $state.go('auxiliar');
                  inscritoFactory.setProdutos(produto);
                  
                }
           });

          }else{
            alert('Opções em branco.')
          }
  }//fim da função imprimir


}])