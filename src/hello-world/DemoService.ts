
export interface IDemoService {
	getPersons(): ng.IPromise<IResposeData>
}

export interface IResposeData {
	data: string[]
}

export class DemoService implements IDemoService {

	static $inject = ['$http'];

	constructor(private $http: ng.IHttpService) { }

	getPersons(): ng.IPromise<IResposeData> {
		return this.$http.get('../../data/countries.json');
	}
}	
	

