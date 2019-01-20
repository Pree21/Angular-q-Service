var app = angular.module('quotesApp', ['ngMaterial', 'ngMessages']);
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  });
app.controller('webController', function($scope,dataService) {
	$scope.loading = true;
	var init = function(){
	 	dataService.getQuotes().then(function(data){
			$scope.quotes = data;
			$scope.loading = false;
		});
	};
	
	angular.element('[ng-controller=webController]').ready(init);
});