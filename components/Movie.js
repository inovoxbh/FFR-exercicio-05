import Link from 'next/link'

export default ({ movie }) => (
  <div>
    <p>
      Título: {movie.title}
      <Link href="/movies/[id]" as={`/movies/${movie.id}`}><a>Detalhes</a></Link>
    </p>
  </div>
)
