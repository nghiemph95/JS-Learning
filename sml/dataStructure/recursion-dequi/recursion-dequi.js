/** Đệ qui: Là quá trình mà function gọi lại chính nó một cách
 * gián tiếp hay trực tiếp
 */

/** Lưu ý:
 * - Khi làm việc phải có BASE CASE (điểm dừng, break point) để nó xác định điểm dừng,
 * nếu không hàm sẽ được gọi lại liên tục
 * - Nếu để recursion gọi lại càng nhiều thì vô tình sẽ làm tăng bộ nhớ đệm
 */

/** Có 6 loại recursion
 * 1. Primitive recursion: Có thể chuyển sang dạng loop
 * 2. Tail recursion: Là một dạng primitive recursion mà lời gọi recursive func nằm ở cuối hàm
 * 3. Single recursion: Chỉ có một lời gọi recursive func
 * 4. Multiple recursion: Có nhiều lời gọi recursive func
 * 5. Mutual or Indirect recursion: Có ít nhất từ 2 function trở lên tạo nên recursion này: A -> B -> C -> A
 */
