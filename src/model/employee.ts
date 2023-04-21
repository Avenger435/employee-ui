import { Address } from "./address";
import { Insurance } from "./insurance";

export class Employee {

    name: string = '';
    department: string = '';
    addresses: Address[] = [];
    insurance: Insurance = new Insurance();
    employeeResponseMsg: string = '';

    public constructor(init?: Partial<Employee>) {
        Object.assign(this, init);
    }
}
