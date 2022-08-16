/** setTimeout with This */
const student = {
  name: "test",
  //Method sayHello()
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};

student.sayHello(); // this trong method sẽ trỏ đến object mà gọi cái method đó là student

//Thằng gọi không phải thằng Student
// setTimeout sẽ chạy qua webAPI, sau khi đó mới chạy qua callback queue, nên hàm được gọi là từ 1 context khác
// Nên kết quả là ra 1 global object
setTimeout(student.sayHello);

// setTimeout sẽ không dùng bind this được
setTimeout.bind(student, student.sayHello); // Dính lỗi Illegal invocation

//Cách sử lý issue bên trên bằng cách sử dụng wrapper function
// Tức là tạo ra 1 cái inline func trước sau đó mới gọi func của mình
setTimeout(() => {
  console.log("Cách sử lý sử dụng wrapper function");
  console.log("this", this); //This sẽ trả ra global object
  student.sayHello(); // Hàm sayHello() được gọi bỏi object student
});

//Cách xử lý issue "setTimeout ko dùng bind this được" bằng cách sử dụng bind this
setTimeout(student.sayHello.bind(student)); //bind thẳng vào hàm chứ ko dùng setTimeout.bind được

/** Ví dụ vui vui */
const studentV2 = {
  name: "Test time 2",
  // Nếu lấy studentV2.normal() thì trả ra kết quả bình thường
  normal() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },

  // Đừng viết arrow vì arrow ko có this riêng của nó mà tái sử dụng lại this bên ngoài => global object
  arrow: () => {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },

  timeoutNormal() {
    console.log("OUTER THIS", this);

    setTimeout(function () {
      console.log("NAME", this.name); //This trong đây sẽ là global func
      console.log("THIS", this); //This trong đây sẽ là global func
    });
  },

  timeoutArrow() {
    console.log("OUTER THIS", this);

    setTimeout(() => {
      console.log("NAME", this.name); //This trong này nằm trong arrow func nên sẽ hưởng cái this bên ngoài OUTER THIS nên là student
      console.log("THIS", this);
    });
  },
};

studentV2.timeoutNormal();
