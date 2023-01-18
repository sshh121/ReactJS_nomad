import { legacy_createStore } from "redux";

// action
const ADD = "ADD"
const DELETE = "DELETE"

// action creator 생성하고 export 시켜줌 (이유는 나중에)
// action 객체는 무조건 type필드를 가지고 있어야 하며, (이때 값은 action 이름) 나머지는 작성자 마음대로 가능
export const addToDo = text => {
	return {
		type: ADD,
		text
	}
}

export const DeleteToDo = id => {
	return {
		type: DELETE,
		id
	}
}

// createStore 인자로 들어갈 reducer 생성
const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.text, id: Date.now()}, ...state]
		case DELETE:
			return state.filter(toDo => toDo.id !== action.id)
		default:
			return state
	}
}

// createStore 인자로 reducer가 들어감
// reduce는 변화를 일으키는 함수로, state를 입력값으로 받고, action을 참조해 새로운 state 값을 만들어 return 해줌
const store = legacy_createStore(reducer)

// 변경사항을 우리한테 알려주는 subscribe
// React는 변화가 있는 부분만 다시 렌더링해줌 (모두 재렌더링 X)
// store.subscribe()

export default store