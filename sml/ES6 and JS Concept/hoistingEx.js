var tip = 100;

(function () {
  console.log("I have $" + husband());
  /** complier auto hoisitng to desclaration var tip; before run code
   * and var tip = undefined
   * then undefined * 2 = NaN
   */

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
