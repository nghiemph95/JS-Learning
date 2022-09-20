import { GAME_STATUS, PAIRS_COUNT } from './constants.js'
import { getColorListElement, getColorElementList } from './selectors.js'
import { getRandomColorPairs } from './utils.js'

// Global variables
let selections = []
let gameState = GAME_STATUS.PLAYING

// TODOs
// 1. Generating colors using https://github.com/davidmerfield/randomColor
// 2. Attach item click for all li elements
// 3. Check win logic
// 4. Add timer
// 5. Handle replay click
console.log(getRandomColorPairs(PAIRS_COUNT))

// gắn class active cho các liElement
function handleColorClick(liElement) {
  if (!liElement) return

  liElement.classList.add('active')

  // sau mỗi lần click lưu các thông tin vào 1 mảng tạm
  selections.push(liElement)
  // nếu click 1 lần thì chưa làm gì cả, chừng nào click 2 lần thì mới tiếp tục check
  if (selections.length < 2) return

  // kiểm tra sau 2 lần click, 2 màu sắc có giống hoặc khác nhau ?
  const firstColor = selections[0].dataset.color
  const secondColor = selections[1].dataset.color
  const isMatch = firstColor === secondColor

  if (isMatch) {
    // kiểm tra đã win chưa, đã đủ 16 ô hay chưa

    return
  }

  // trường hợp không match
  // xóa bỏ class-active cho 2 li-element đang đc click
  selections[0].classList.remove('active')
  selections[1].classList.remove('active')
  // reset lại mảng rỗng cho selections cho lượt kế tiếp
  selections = []
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
