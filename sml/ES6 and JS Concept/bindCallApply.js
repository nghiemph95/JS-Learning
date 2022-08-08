"use strict";

function sayHello(a, b) {
  console.log(this.name, a + b);
}

const student = {
  name: "test",
};

//sayHello(); // undefined

// tạo function studentSayHello
const studentSayHello = sayHello.bind(student); // this chính là student nên khi vào hàm sayHello, chỗ nào là this nó sẽ được thay thế bằng hàm student
// this.name sẽ tương đương student.name
studentSayHello(5, 10); // Nếu không chủ động gọi hàm này thì hàm bind sẽ ko chạy mà để đó.
