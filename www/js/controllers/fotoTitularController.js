angular.module('starter.controller')
.controller('fotoTitularCtrl', ['$scope', '$state', 'inscritoFactory', '$cordovaCamera', 'fotoService', function($scope, $state, inscritoFactory, $cordovaCamera, fotoService){
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
    var image = document.getElementById('imagemTitular');
    image.src = "data:image/jpeg;base64," + data;
     var aux = inscritoFactory.get(); 
     var cpf = aux.cpf;
    
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
		var image = document.getElementById('imagemTitular');
    	image.src = null;
		$state.go('secundaria');
	}
}])