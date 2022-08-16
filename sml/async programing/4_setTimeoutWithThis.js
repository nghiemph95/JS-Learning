/** setTimeout with This */
const student = {
  name: "test",
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};

student.sayHello(); // this trong method sẽ trở đến object mà gọi cái method đó là sayHello()

//Thằng gọi không phải thằng Student
// setTimeout sẽ chạy qua webAPI, sau khi đó mới chạy qua callback queue, nên hàm được gọi là từ 1 context khác
setTimeout(student.sayHello);

// setTimeout sẽ không dùng bind this được
setTimeout.bind(student, student.sayHello); // Dính lỗi Illegal invocation

//Cách sử lý sử dụng wrapper function
setTimeout(() => {
  console.log("Cách sử lý sử dụng wrapper function");
  console.log("this", this); //This sẽ trả ra global object
  student.sayHello();
});
