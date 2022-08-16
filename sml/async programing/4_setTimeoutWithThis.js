/** setTimeout with This */
const student = {
  name: "test",
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};

student.sayHello(); // this trong method sẽ trở đến object mà gọi cái method đó là sayHello()
