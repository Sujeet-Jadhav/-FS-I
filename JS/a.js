function declere(name, age,salary){
    this.name=name;
    this.age=age;

    this.salary=salary;
 return this
}


uesr1 = new declere('sujeet',21,444444);
uesr2 =  new declere('vaibhav ',22,123);
uesr3 =  declere('vaibhav ',22,123);


console.log(uesr1.name,uesr1.age,uesr1.salary);
console.log(uesr2.name,uesr2.age,uesr2.salary);


