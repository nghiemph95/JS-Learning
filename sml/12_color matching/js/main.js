import { GAME_STATUS, PAIRS_COUNT } from './constants.js'
import { getColorListElement, getColorElementList, getInActiveColorList } from './selectors.js'
import { getRandomColorPairs } from './utils.js'

// Global variables
let selections = []
let gameStatus = GAME_STATUS.PLAYING

// TODOs
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click
// console.log(getRandomColorPairs(PAIRS_COUNT))

// gắn class active cho các liElement
function handleColorClick(liElement) {
  // không cho click khi game ở trạng thái blocking hoặc finished
  const shouldBlockClick = [GAME_STATUS.BLOCKING, GAME_STATUS.FINISHED].includes(gameStatus)
  if (!liElement || shouldBlockClick) return

  // hiện màu khi click vào các ô
  liElement.classList.add('active')

  // sau mỗi lần click lưu các thông tin vào 1 mảng tạm
  selections.push(liElement)

  // console.log('cell click', selections)
  // nếu click 1 lần thì chưa làm gì cả, chừng nào click 2 lần thì mới tiếp tục check
  if (selections.length < 2) return

  // kiểm tra sau 2 lần click, 2 màu sắc có giống hoặc khác nhau ?
  const firstColor = selections[0].dataset.color
  const secondColor = selections[1].dataset.color
  const isMatch = firstColor === secondColor

  if (isMatch) {
    // kiểm tra đã win chưa, đã đủ 16 ô hay chưa (tìm những thằng ko có trạng thái active)
    const isWin = getInActiveColorList().length === 0

    if (isWin) {
      console.log('win')
      // hiển thị nút replay

      // hiển thị YOU WIN
    }

    return
  }

  // trường hợp không match
  // xóa bỏ class-active cho 2 li-element đang đc click
  gameStatus = GAME_STATUS.BLOCKING

  setTimeout(() => {
    // console.log('timeout run')
    /** sau khi click 3 lần thì
     * lần 1: không trigger setTimeout
     * lần 2: trigger setTimeout (ở lần 2 khi trigger setTimeout nó sẽ vô tình clear seletions = [])
     * lần 3: trigger setTimeout (dẫn đến ở lần thứ 3 -> get error)
     */
    selections[0].classList.remove('active')
    selections[1].classList.remove('active')

    // reset lại mảng rỗng cho selections cho lượt kế tiếp
    selections = []

    // reset lại trạng thái game về playing sau khi setTimeout được thực thi
    gameStatus = GAME_STATUS.PLAYING
  }, 500)
}

function initColors() {
  // random 8 colors
  const colorList = getRandomColorPairs(PAIRS_COUNT) // 16 colors được generated

  // bind to li > div.overlay
  const liList = getColorElementList() // 16 ô liElement

  liList.forEach((liElement, index) => {
    //tạo data color cho từng thẻ liElement
    liElement.dataset.color = colorList[index]
    // gắn màu cho từng thẻ liElement
    const overlayElement = liElement.querySelector('.overlay')
    if (overlayElement) overlayElement.style.backgroundColor = colorList[index]
  })
}

function attachEventForColorList() {
  const ulElement = getColorListElement()

  // sử dụng kỹ thuật event delegation để add sự kiên click cho thằng cha
  ulElement.addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') return
    handleColorClick(event.target)
  })
}

//main
;(() => {
  initColors()

  attachEventForColorList()
})()
