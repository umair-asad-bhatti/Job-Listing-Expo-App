export class EmployeeModel {
    constructor(empName, empPassword, empNumber) {
        this['Employee Name'] = empName;
        this["Employee Password"] = empPassword;
        this["Employee Number"] = empNumber;
    }
}