console.log("Welcome to JS");

const month = 1;
switch (month) {
  case 1:
    console.log("Jan");
    break;
}

for (let i = 1; i < 10; i++) {
  console.log("test");
}

//operator
typeof alert  // trả về chuỗi và cho biết nó có giá trị gì 

/* function: tập hợp các dòng lệnh có liên quan đến nhau để 
thực hiện 1 chức năng nào đó */

//function declaration: Khai báo hàm
function sayHello(name)

// khi viết hàm phải kiểm tra tính hợp lệ của tham số đầu vào
function sumTwoNumber(a, b) {
//check a, b should be posible
  if (a>0 || b<0) return -1;
  return a + b;
}

/* Boolean */
/** trong JS ứng vs mỗi kiểu dl thì có 1 object giúp tương tác vs 
 * kiểu dữ liệu đó 1 cách đơn giản và được gắn trong pulling object
 */

/** type coersion: ép kiểu tự động */
/** tyep conversion: ép kiểu tường minh */
const a = 1 + '2';
console.log(typeof (a))

const b = 1 - '2';
console.log(typeof (b))

/** truthy và falsy */

/** logical operator: toán tử luận lý */

// nếu so sánh "===": không chuyển đổi kiểu dữ liệu
function printMonth(n) {
  let month = ''
  switch(n){
    case 1: {
      month='Jan';
      break;
    }
  }
}
