import axios from "axios"
import { useRouter } from 'next/router'
import Link from "next/link"

const Index = (props) => {
  const router = useRouter();
  return (
    <ol>
      {props.movies.map(movie => (<li>
          Título: {movie.title}
          Título2: {movie.title}
          <Link 
              href="/movies/[movie.id]" 
              as={`/movies/${movie.id}`}>
              <a>Details</a>
          </Link>
      </li>))}
    </ol>
  )
}

export async function getStaticProps() {
  const response = await axios('http://localhost:3000/api/movies');

  return { 
    props: {movies: response.data }
  }
}

export default Index
