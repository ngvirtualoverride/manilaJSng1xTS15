import * as controllers from './DemoController';
import * as services from './DemoService';
import * as angular from 'angular';

var app = angular.module('app', []);

app.controller('DemoController', controllers.DemoController) 
   .service('DemoService', services.DemoService);

angular.element(document)
	   .ready(() => {
    		angular
    			.bootstrap(document, ['app']);
		});
		