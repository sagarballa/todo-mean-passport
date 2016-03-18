var app = angular.module('TodoApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/todolist', {
		templateUrl: 'view/todolist.html',
		controller: 'TodoListCtrl'
	}); 
	$routeProvider.otherwise({
		redirectTo: '/todolist'
	});
}]);
