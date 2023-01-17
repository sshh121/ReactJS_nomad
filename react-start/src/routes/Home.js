import { useState, useEffect } from "react"
import Movie from "../components/Movie"

function Home() {
	const [loading, setLoading] = useState(true)
  // 영화 리스트를 받는 배열을 state에 생성
  const [movies, setMovies] = useState([])
  // 기존의 처리 방식말고, async-await 방식 사용을 위한 함수 생성
  const getMovies = async() => {
    const json = await ( 
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json()
    setMovies(json.data.movies)
    setLoading(false)
  }

  // 처음에만 실행하겠다..
  useEffect(() => {
    getMovies()
  }, [])
  // console.log(movies)
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : 
        (<div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))} 
        </div>
      )}
    </div>
  )
}
export default Home