import axios from "axios";

export default (req, res) => {
    const {
        query: {id},
    } =req;

    const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

    const details = axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    
    res.status(200).json(details)
}
