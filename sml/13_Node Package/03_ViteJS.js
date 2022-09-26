/** Bundle (ex: Webpack)
 * BUILD -> BUNDLE recompilation (+1 second) | BUILD -> Bundle recompilation
 * (mỗi change file, sẽ re-bundle lại khiến nó lâu nên chỉ phù hợp vs app nhỏ)
 */

/** Unbundle (Snowpack)
 * build -> build -> build -> ...
 */

/** ViteJS (kiến trúc Unbundle) , Vite có hõ trợ Native ESM trực tiếp trên trình duyệt
 * Ưu điểm:
 * - Chỉ build chứ ko bundle
 * - Hot Module Reloader
 * - Optimize build (sử dụng Rollup)
 * - Chia code thành 2 nhóm:
 *  + Dependencies: Những thư viên đã import nên chỉ re-bundle 1 lần và ko thay đổi (sử dụng ESBuild, viết = Golang, nhanh x10 x100 lần)
 *
 *  ++ re-bundle : ViteJS sẽ chuyển các CommonJS về ESM để trình duyệt hiểu
 *  ++ re-bundle : Gom các internal module thành 1 file để request
 *
 *  + Source code: Gồm các code non-plain JS (jsx, tsx, css,...). Nhiệm vụ của Vite sẽ biến đổi từ 
 * các file/module này thành JS để trả cho trình duyệt hiểu ở dạng JS thuần
 * 
 * - Khi mới vào nó sẽ start ngay server luôn, khi nào truy cập vào phần nào thì mới transform đến phần đó
 *
 */
