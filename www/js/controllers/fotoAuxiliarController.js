angular.module('starter.controller')
.controller('fotoAuxiliarCtrl', ['$scope', '$state', 'inscritoFactory', '$cordovaCamera', 'inscritoService', 'fotoService', function($scope, $state, inscritoFactory, $cordovaCamera, inscritoService, fotoService){
	$scope.fotografar = function(){
		$scope.showSalvar = true;
		$scope.showFotografar = true;

     var options =
    {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: true,
          correctOrientation: false
    };


    $cordovaCamera.getPicture(options)
    .then(function(data){
    var image = document.getElementById('imagemAuxiliar');
    image.src = "data:image/jpeg;base64," + data;
     var aux = inscritoFactory.get(); 
     var cpf = aux.cpfPreposto;
    
      var foto = 
        {
          cpf: cpf,
          foto: data
        }

      fotoService.criar(foto);

      }, function(err){
	    	alert('Não foi possível salvar a foto, tente novamente.')
	  })
}//fim do método fotografar

	$scope.salvar = function(){
    $scope.showSalvar = false;
    $scope.showFotografar = false;
		var image = document.getElementById('imagemAuxiliar');
    image.src = null;
    var promise = inscritoService.criar(inscritoFactory.get());
    promise.then(function(){
    inscritoFactory.reseta();
    $state.go('inicial');
   
    })  
	}//fim do método salvar


}])