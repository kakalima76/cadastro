angular.module('starter.controller')
.controller('imprimirCtrl', ['$scope', '$state', function($scope, $state){

	$scope.doRefresh = function(){
		$state.go('inicial')
		$scope.$broadcast('scroll.refreshComplete');
	}

}])