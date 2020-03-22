import axios from "axios"
import Link from 'next/link'
import {Atalho, TituloH1} from '../components/Visual.js'

const Home = (props) => {
  return (
      <main>
          <h1><TituloH1>Filmes Populares</TituloH1></h1>
          <Link href="/movies">
            <a><Atalho>Lista de Filmes</Atalho></a>
          </Link>
      </main>
  )
}

export default Home
