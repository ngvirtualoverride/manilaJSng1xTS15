
export interface IDemoService {
	getPersons(): ng.IPromise<string[]>
}

export class DemoService implements IDemoService {

	static $inject = ['$http'];

	constructor(private $http: ng.IHttpService) {
		console.log(this.$http);
	}

	getPersons(): ng.IPromise<string[]> {
		return this.$http.get('../../data/persons.json');
	}
}	
	

