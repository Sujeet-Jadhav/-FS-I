function declere(name, age, salary) {
  this.name = name;
  this.age = age;

  this.salary = salary;
  return this;
}

user1 = new declere("sujeet", 21, 444444);
user2 = new declere("vaibhav ", 22, 123);
user3 = declere("vaibhav ", 22, 123);

console.log(user1.name, user1.age, user1.salary);
console.log(user2.name, user2.age, user2.salary);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrFilter = arr.filter((i) => i % 2 == 0);
console.log(arrFilter);
    