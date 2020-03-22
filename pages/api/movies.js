import axios from "axios";

export default (req, res) => {
    const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

    const getPopularMovies = async () => {
        const url =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        const results = await axios(url);

        return results.data.results;
    }

    const popularMovies =getPopularMovies();
    popularMovies.then((popularMovies) => {
        const moviesString =JSON.stringify(popularMovies);

        res.setHeader('Content-Type', 'application/json')
        res.status(200).end(moviesString)
    })
}
