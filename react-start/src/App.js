import { useEffect, useState } from "react"

function App() {
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
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
          ))} 
        </div>
      )}
    </div>
  )
}

export default App;
