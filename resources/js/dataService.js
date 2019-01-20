app.factory('dataService', function($q,$http){
	var api = {};
	
	api.getQuotes = function(){
		var deferred = $q.defer();
		$http.get('quotes.json').then(function(response){
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	
	return api;
});
