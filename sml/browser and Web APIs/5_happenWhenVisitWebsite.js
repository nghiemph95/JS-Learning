/** What happens when I visit a website */

// Khi gõ 1 tên miền, nó sẽ đi tìm cái ip của domain đó
// thông tin sẽ được đến DNS server để check domain và lấy ip của web đó
// sau đó sẽ trả về server để gọi dữ liệu và trả về lại website

/** sau khi lấy đc ip từ DNS
 * đối với :
 * http: sẽ thực hiện việc bắt tay: SYN - ACK
 * https: sẽ thực hiện bắt tay:
 * browser -> site: clientHello
 * site -> browser: serverHello & certificate
 * browser -> site: clientKey
 * site -> browser: finished
 * browser -> site: finished
 */
