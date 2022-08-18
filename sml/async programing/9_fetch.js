/** fetch là 1 global method nằm trong Web APIs , hiểu nôm na là 1 cái hàm*/

const promise = fetch(url, init); // init là 1 cái object, là 1 optional và trả về 1 promise

/** fetch luôn luôn trả về promise vs status là fulfilled
 * fetch chỉ trả về error khi network không thực hiện được hoặc bị lỗi
 * cho dù server có trả ra mã lỗi hoặc các message lỗi thì fetch vẫn nhận vào là RESPONSE OK
 */
