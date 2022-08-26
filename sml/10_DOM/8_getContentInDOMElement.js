/** cách lấy content trong 1 cái DOM element */

/** so sánh TextContent - innerText - innerHTML
 * 1. Định nghĩa:
 *  - TextContent: là tất cả các content của các phần tử (không aware styling)
 *  - InnerText: là những gì thấy đc trên giao diện, liên quan đến style
 *  - InnerHTML: lấy được từ HTML
 */

<h1 class="hero_title">
  'Easy'
  <span style="display: none;">Frontend</span>
  <style>.abc {}</style>
  <scipt>console.log('test')</scipt>
</h1>;

$0.innerText; // Easy
$0.textContent; // "Easy Frontend\n\n.abc {} \nconsole.log('test')"
$0.innerHTML; // 'Easy'<span style="display: none;">Frontend</span><style>.abc {}</style><scipt>console.log('test')</scipt>

/** CHÚ Ý: khi sử dụng innerHTML phải chú ý
 * chuỗi HTML có an toàn để render, có đang tin cậy hay ko, kể cả server của mình
 * ngoài ra
 * có thể dùng thư viện DOMPurify santitize HTML nhằm lọc và bỏ đi các chuỗi HTML nguy hại
 * để trả về cho 1 chuỗi HTML an toàn
 */

// Khi sủ dụng innerHTML nó sẽ thực thi script nhằm đánh cắp dữ liệu, cookies hoặc storage của User
const dangerousTextFromSomewhere =
  "<img src='abc' onerror='alert(\"youare hacked!\")' />";
target.innerHTML = dangerousTextFromSomewhere;
