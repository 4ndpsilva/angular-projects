import { BaseModel } from './base-model.model';
import { Department } from './department.model';

export class Employee extends BaseModel{
	name: string;
	office: string;
	email: string;
	lastAccess: Date;
	department: Department;
}
