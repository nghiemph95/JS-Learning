/** Hãy viết hàm printClock() trả về intervalId để in ra console thời gian hiện tại.

Cách lấy thời gian hiện tại, bao gồm giờ phút giây sẽ như bên dưới.

const now = new Date();
now.getHours();
now.getMinutes();
now.getSeconds(); 


Khi gọi hàm printClock(), cứ mỗi giây sẽ in ra console thời gian hiện tại 
với format: HH:mm:ss (nhớ đảm bảo luôn show 2 chữ số). 
Khi muốn stop log, gọi clearInterval(). Ví dụ như bên dưới

const intervalId = printClock();
// will start to log
// eg: 07:30:15
 
// until I call clearInterval
clearInterval(intervalId) */
