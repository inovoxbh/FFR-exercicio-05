import React, {useState,useEffect} from "react";
import {MoviesService} from "../services/MoviesService.js";
import { Link } from "react-router-dom";

export const MoviesList = () => {
    const [movies,setMovies] = useState([]);

    const requisitarFilmes = async () => {
      const resultadoFilmes = await MoviesService.getPopularMovies();
      setMovies(resultadoFilmes.data.results);
    };

    useEffect(() => {
      requisitarFilmes();
    },[]);
    
    return (
      <ol>
        {movies.map(movie => (<li>
                                Título: {movie.title}
                                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                              </li>))}
      </ol>
    )

};
