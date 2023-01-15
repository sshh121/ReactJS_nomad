import propTypes from "prop-types"
import styles from "./Button.module.css"
//styles는 javascript의 오브젝트로, Button.module.css에 작성했던 btn을 가지고 있는 것

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
  text: propTypes.string.isRequired
}


// App.js에서 Button을 가져올 수 있게 하기 위해서
export default Button;
