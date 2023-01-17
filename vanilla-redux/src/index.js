import { legacy_createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

const ADD = "ADD"
const MINUS = "MINUS"

// state가 없을 때, 디폴트 값으로 0을 준다 (초기화)
const countModifier = (count = 0, action) => {
  // count를 ++하거나, --해야 한다 => action을 통해 가능하다!
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}
const countStore = legacy_createStore(countModifier)

const onChange = () => {
  // console.log("change")
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)


// add 버튼을 누르면 생기는 일
add.addEventListener("click", () => countStore.dispatch({type: ADD})) 
// minus 버튼을 누르면 생기는 일
minus.addEventListener("click", () => countStore.dispatch({type: MINUS})) 