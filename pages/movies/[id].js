import axios from "axios"
import Link from 'next/link'

const Index = (props) => {
  return (
    <div>
        <h1>{props.movie.title}</h1>
        <h2>Overview</h2>
        <p>{props.movie.overview}</p>
        <h3>Lançamento</h3>
        <p>{props.movie.release_date}</p>
        <Link href="/" >
            <a>Voltar</a>
        </Link>

    </div>
  )
}

export async function getServerSideProps({ params }) {
  const response = await axios(`http://localhost:3000/api/movies/${params.id}`);

  return { 
    props: {
        movie: response.data
    }
  }
}

export default Index