import axios from "axios"
import Movie from '../../components/Movie'
import Link from 'next/link'
import {Atalho, ItemLista, TituloH1} from '../../components/Visual.js'

const Index = (props) => {
  return (
    <main>
        <h1><TituloH1>Lista de Filmes Populares</TituloH1></h1>

        <Link href="/" >
            <a><Atalho>Home</Atalho></a>
        </Link>

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
