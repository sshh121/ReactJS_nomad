import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
	const [movie, setMovie] = useState("")
	const { id } = useParams()
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			).json()
			// console.log(json.data.movie)
			setMovie(json.data.movie)
	}
	useEffect(() => {
		getMovie()
	}, [])
	return (
		<div>
			<h1>{movie.title}</h1>
			<p>{movie.description_full.length > 255 ? `${movie.description_full.slice(0,255)}...` : movie.description_full }</p>
		</div>
	)
}
export default Detail