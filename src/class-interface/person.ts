'use strict';

import { IPerson } from './iperson';

export class Person implements IPerson {
	private __firstName: string;
	private __lastName: string;
	
	constructor(firstName: string, lastName: string){	
		this.__firstName = firstName;
		this.__lastName = lastName;
	}
	
	get fullName(): string {
		return this.__lastName.concat(', ').concat(this.__firstName);
	}
}
