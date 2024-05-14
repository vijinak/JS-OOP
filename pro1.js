// OOP
//[id, name, designation, location, salary, experience]
// [1000,'Neel','developer','kochi',25000,3]
// class
class Employee{
    // property
    empName
    empDesg
    empLocation
    empSalary
    // constructer
    constructor(eName,eDesg,eLocation,eSalary){
        this.empName=eName
        this.empDesg=eDesg
        this.empLocation=eLocation
        this.empSalary=eSalary
    }
    // method
    display(){
        console.log(`Employee name is ${this.empName}`);
    }
}
// object
const obj1= new Employee('Neel','developer','kochi',25000)
const obj2= new Employee('John','manager','calicut',35000)
obj1.display()
obj2.display()