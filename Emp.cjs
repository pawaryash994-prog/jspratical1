class Emp{

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    display(){
        console.log("id"+this.id);
        console.log("name"+this.name);
        console.log("salary"+this.salary);
        
    }
}

module.exports=Emp;