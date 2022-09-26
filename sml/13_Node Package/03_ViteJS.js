/** Bundle (ex: Webpack)
 * BUILD -> BUNDLE recompilation (+1 second) | BUILD -> Bundle recompilation
 * (mỗi change file, sẽ re-bundle lại khiến nó lâu nên chỉ phù hợp vs app nhỏ)
 */

/** Unbundle (Snowpack)
 * build -> build -> build -> ...
 */

/** ViteJS (kiến trúc Unbundle) */
