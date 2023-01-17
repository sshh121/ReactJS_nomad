import propTypes from "prop-types"
import { Link } from "react-router-dom"

// Movie 컴포넌트가 모든 properties에 대해 부모 컴포넌트로부터 받아올 것이다 !
function Movie({id, coverImg, title, summary, genres}) {
  return <div>
    <img src={coverImg} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link></h2>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary }</p>
    <ul>
      {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
  </div>
}

// Movie 컴포넌트의 prop type을 지정
Movie.propTypes = {
  id: propTypes.number.isRequired,
	coverImg: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	genres: propTypes.arrayOf(propTypes.string.isRequired)

}
export default Movie