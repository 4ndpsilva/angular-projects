import { BaseModel } from './base-model.model'
import { Department } from './department.model'
import { Employee } from './employee.model'

export class Request extends BaseModel{
	requester: string;
	openingDate: any;
	lastUpdate: any;
	description: string;
	status: string;
	destiny: Department;
	moves: Array<Moviment>;
}

class Moviment extends BaseModel{
	employee: Employee;
	dateTime: Date;
	description: string;
	status: string;
}