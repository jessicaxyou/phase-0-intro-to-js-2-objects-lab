// "before each" hook for "returns an employee with the original key value pairs and the new key value pair":
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function  updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]:value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}