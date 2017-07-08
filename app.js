var app = angular.module('24Streets',['ngRoute','ngAnimate']);

app.config(($routeProvider)=>{



	$routeProvider.when('/',{

		controller :'IntroCtrl',
		templateUrl : 'app/views/intro.html' 
	})

});