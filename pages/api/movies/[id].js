import axios from "axios";

export default (req, res) => {
    const {
        query: {id},
    } =req;

    const getMovie = async () => {
        const API_KEY ="d416af5d4faee64e25ab001d87aab5c3";
        const url =`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        const results = await axios(url);

        return results.data;
    }

    const Movie =getMovie();
    Movie.then((Movie) => {
        const movieString =JSON.stringify(Movie);

        res.setHeader('Content-Type', 'application/json')
        res.status(200).end(movieString)
    })
}
