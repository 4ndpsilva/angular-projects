import { BaseModel } from './base-model'
import { Department } from './department'
import { Employee } from './employee'

export class Request extends BaseModel{
	requester: string;
	openingDate: any;
	lastUpdate: any;
	description: string;
	status: string;
	destiny: Department;
	moves: Array<Movimentacao>;
}

class Movimentacao extends BaseModel{
	employee: Employee;
	dateTime: Date;
	description: string;
	status: string;
}