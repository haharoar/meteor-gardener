angular.module('starter',['ionic','starter.controllers'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('app',{
		url: '/app',
		abstract: true,
		templateUrl:'templates/menu.html'
	})
	.state('app.home',{
		url: '/home',
		views: {
			'menuContent':{
				templateUrl:'templates/home.html',
				controller: 'homeController'
			}
		}
	})
	.state('login',{
		url: '/login',
				templateUrl:'templates/login.html',
				controller: 'loginController'
	})
	.state('signup',{
		url: '/signup',
				templateUrl:'templates/signup.html',
				controller: 'signupController'			
				
	})
	// .state('app.tips',{
	// 	url: '/tips',
	// 	views: {
	// 		'menuContent':{
	// 			templateUrl:'templates/tips.html',
	// 			controller: 'tipsController'
	// 		}
	// 	}
	// })
	// .state('app.tipitem',{
	// 	url: '/tipitem/:tipsId',
	// 	views: {
	// 		'menuContent':{
	// 			templateUrl:'templates/tipitem.html',
	// 			controller: 'tipController'
	// 		}
	// 	}
	// })
	.state('app.aboutus',{
		url: '/aboutus',
		views: {
			'menuContent':{
				templateUrl:'templates/aboutus.html',
				controller: 'aboutusController'
			}
		}
	})
	.state('app.logs',{
		url: '/logs',
		views: {
			'menuContent':{
				templateUrl:'templates/logs.html',
				controller: 'logsController'
			}
		}
	})
	.state('app.tips1',{
		url: '/tips1',
		views: {
			'menuContent':{
				templateUrl:'templates/tips1.html',
				controller: 'tipsController'
			}
		}
	})
	.state('app.tips2',{
		url: '/tips2',
		views: {
			'menuContent':{
				templateUrl:'templates/tips2.html',
				controller: 'tipsController'
			}
		}
	})
	.state('app.tips3',{
		url: '/tips3',
		views: {
			'menuContent':{
				templateUrl:'templates/tips3.html',
				controller: 'tipsController'
			}
		}
	})
	.state('app.tips4',{
		url: '/tips4',
		views: {
			'menuContent':{
				templateUrl:'templates/tips4.html',
				controller: 'tipsController'
			}
		}
	})
	.state('app.profile',{
		url: '/profile',
		views: {
			'menuContent':{
				templateUrl:'templates/profile.html',
			}
		}
	})
	.state('app.forum',{
		url: '/forum',
		views: {
			'menuContent':{
				templateUrl:'templates/forum.html',
			}
		}
	})
	$urlRouterProvider.otherwise('/login');
});	