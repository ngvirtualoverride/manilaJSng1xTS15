import * as services from './DemoService';
import * as angular from 'angular';

export class DemoController {	
	  message: string;
	  countries: Array<string>;
	  
	  response: ng.IPromise<string>
	
	  static $inject = ['DemoService'];
	
	  constructor(private demoService: services.IDemoService) {  
		  	var __this = this;
		  
			this.message = "Hallo World!";
			
			demoService.getPersons()
					.then((response): void => {
	                   __this.countries = response.data;
	             	 });
	  }
}	
