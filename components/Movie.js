import Link from 'next/link'
import {Atalho, ItemLista} from './Visual'

export default ({ movie }) => (
  <div>
    <p>
      <ItemLista> Título: {movie.title} </ItemLista>
      <Link href="/movies/[id]" as={`/movies/${movie.id}`}><a><Atalho>Detalhes</Atalho></a></Link>
    </p>
  </div>
)
