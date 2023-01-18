import React, { useState } from "react"
import { connect } from "react-redux"

function Home({todos}) {
	// console.log(props) -> mapStateToProps()에 전달해줄 props
	const [text, setText] = useState("")
	function onChange(e) {
		setText(e.target.value)
	}
	function onSubmit(e) {
		e.preventDefault()
		setText("")
	}
	return (
		<div>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange}></input>
				<button>Add</button>
			</form>
			<ul>
				
			</ul>
		</div>
	)
}

// store에서 state를 가져오기 위한 함수
// mapStateToProps라고 불림 -> (state, component의 props)를 인자로 갖는다
// state는 store로부터 받는 정보, props는 react-router로부터 받는 component의 정보
// mapStateToProps를 사용한다는 의미는, Redux store로부터 무엇인가를 가져오고 싶다는 것
// mapStateToProps는 Redux state로부터 home 컴포넌트에 prop으로써 전달한다 
	// 즉, todo를 렌더링 할 수 있다는 뜻
function mapStateToProps(state) {
	return { toDos: state }
}
export default connect(mapStateToProps)(Home)