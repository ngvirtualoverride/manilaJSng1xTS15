import { DemoController } from './DemoController';
import { DemoService } from './DemoService';
import * as angular from 'angular';

var app = angular.module('app', []);

app.controller('DemoController', DemoController) 
   .service('DemoService', DemoService);

angular.element(document)
	   .ready(() => {
    		angular
    			.bootstrap(document, ['app']);
		});
		