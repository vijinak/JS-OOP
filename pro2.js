// [id, name, parent, address ,phone]
// class
class Student{
    
    // constructer-it invokes automatically
    constructor(sId,sName,sParent,sAddress,sPhone){
        this.stuId=sId
        this.stuName=sName
        this.stuParent=sParent
        this.stuAddress=sAddress
        this.stuPhone=sPhone
        this.output()
    }
    output(){
        console.log(`Student ID of ${this.stuName} is ${this.stuId}`);
    }
}
// object
const obj1 = new Student(101, 'Sarang', 'Sathyan', 'kochi', '685685689')
const obj2 = new Student(102, 'Nithya', 'Narayanan', 'calicut', '32547864')
const obj3 = new Student(103, 'Keerthana', 'Sasi', 'kollam','25625225')
