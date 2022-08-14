var tip = 100;

(function () {
  console.log("I have $" + husband());
  /** complier auto hoisitng to desclaration(Khai báo) var tip; before run code
   * and var tip = undefined (biến tip khi khai báo mà không gán giá trị sẽ trả về undefined)
   * then undefined * 2 = NaN
   */

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})(); // Dấu ngoặc () cuối cùng có nghĩa là thực thi hàm luôn
//()(): ngoạc đầu tiên là định nghĩa hàm, hàm thứ 2 là thực thi hàm
