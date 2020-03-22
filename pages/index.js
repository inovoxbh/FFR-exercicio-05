import axios from "axios"
import { useRouter } from 'next/router'
import Movie from '../components/Movie'

const Index = (props) => {
  const router = useRouter();
  return (
    <ol>
      {props.movies.map(m => (<li>
          <Movie movie={m} />
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
