import axios from "axios"
import Link from 'next/link'

const Home = (props) => {
  return (
      <main>
          <h1>Filmes Populares</h1>
          <Link href="/movies">
            <a>Lista de Filmes</a>
          </Link>
      </main>
  )
}

export default Home
