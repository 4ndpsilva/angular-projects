import { BaseModel } from './base-model'
import { Department } from './department'

export class Employee extends BaseModel{
	var name: string;
	var office: string;
	var email: string;
	var lastAccess: Date;
	var department: Department;
}
