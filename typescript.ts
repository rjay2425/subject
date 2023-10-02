class Person {
  name:String;
  constructor(name:string){this.name=name;}
  say(){return "Hello, My name is "+this.name}
}

let person = new Person('june')

console.log(person.say())