/** Yarn và NPM ra đời để giúp quản lý các dependencies trong project, quản lý
 * add, update, remove các thư viện, sự phụ thuộc, liên kết các thư viện khác nhau
 */

/**
 * file package.json: file chứa những config trong dự án
 * devDependencies: những thư viện/package chỉ dùng cho local development
 * dependencies: khi build lên prod thì nó sẽ lấy những thư viện trong dependencies
 *
 * script: những lệnh để khi thực thi nó sẽ chạy những dòng đã được viết sẵn trong script
 *
 * Khi đặt tên version cho project phải tuân theo quy tắc Semantic versioning
 * - major version: version chính
 * - minor version: new feature
 * - patch version: bug/hot fix/...
 *
 * Nếu trước đó là dấu ~ "react": "~17.0.0" tức là nó chỉ accept với patch version
 * Nếu trước đó là đấu ^ "react-hook-form": "^7.0.1" tức nó chỉ accept với minor version
 *
 *
 */

/** NPM
 * 1. Node Package Manager
 * 2. Khi cài NodeJS nó sẽ tự động cài npm
 * 3. Lock file: package-lock.json
 * 4. Install package: chạy lần lượt từng package
 */

/** Yarn
 * 1. Yet Another Resource Negotiation
 * 2. Cài bằng lệnh: npm i -g yarn (npm install global yarn)
 * 3. Lock file: yarn.lock
 * 4. Install package: chạy song song nhiều package cùng lúc
 */
