'use strict';

import { Person } from './person'
import { IPerson } from './iperson'

class Student extends Person {
	private __level: string;
	
	get level(): string {
		return this.__level;
	}
	
	set level(value: string) {
		this.__level = value;
	}
}

class Employee extends Person {
}

class Main {
	constructor(private person: IPerson){
	}
	
	display(){
		console.log(this.person.fullName);
	}
}

var student = new Student('1111', 'Dela Cruz');
student.level = 'College';

var main = new Main(student);
main.display();


var employee = new Employee("Pedro", "Pendoko");
var main = new Main(employee);
main.display();






