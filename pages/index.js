import axios from "axios"
import Movie from '../components/Movie'

const Index = (props) => {
  return (
    <ol>
      {props.movies.map((m,i) => (<li>
          <Movie movie={m} key={i}/>
      </li>))}
    </ol>
  )
}

//getStaticProps
export async function getServerSideProps() {
  const response = await axios('http://localhost:3000/api/movies');

  return { 
    props: {movies: response.data }
  }
}

export default Index
