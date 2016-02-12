var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider' , function($routeProvider){
	$routeProvider
	.when('/main', {
		templateUrl:'main.html',
		controller:'mainCtrl'
	})
	.when('/about', {
		templateUrl:'about.html',
		controller:'mainCtrl'
	})
	.when('/models', {
		templateUrl:'models.html',
		controller:'models'
	})
	.when('/contact', {
		templateUrl:'contact.html',
		controller:'contact'
	})
	.otherwise({redirectTo:'/main'})
}]);

app.controller('mainCtrl',function(){

});
app.controller('models',function($scope,$http){
	$http.get('models.json').then(function(response){
		console.log(response.data);
		$scope.res = response.data;
	});
});
app.controller('contact',function($scope,$http){
	$http.get('contact.json').then(function(response){
		console.log(response.data);
		$scope.res = response.data;
	});
});