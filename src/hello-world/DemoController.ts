import { IDemoService } from './DemoService';
import * as angular from 'angular';

export class DemoController {
	  message: string;
	  persons: Array<string>
	
	  static $inject = ['DemoService'];
	
	  constructor(private demoService: IDemoService) {  
			this.message = "Hallo World!";
		
			demoService.getPersons()
				.then((response) => {
                 	this.persons = response;
              });
	  }
}	
