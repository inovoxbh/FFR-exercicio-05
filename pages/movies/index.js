import axios from "axios"
import Movie from '../../components/Movie'
import Link from 'next/link'

const Index = (props) => {
  return (
    <main>
        <Link href="/" >
            <a>Home</a>
        </Link>

        <h1>Lista de Filmes Populares</h1>

        <ol>
        {props.movies.map((m,i) => (<li key={i}>
            <Movie movie={m} />
        </li>))}
        </ol>
    </main>
  )
}

export async function getServerSideProps() {
  const response = await axios('http://localhost:3000/api/movies');

  return { 
    props: {movies: response.data }
  }
}

export default Index
