import React, {useState,useEffect} from "react";
import {MoviesService} from "../services/MoviesService.js";
import { Link } from "react-router-dom";

export const Details = (props) => {
    const [detalhes,setDetalhes] = useState({});

    const consultarDetalhes = async () => {
      const detalhesFilme = await MoviesService.getMovieById(props.match.params.id);
      setDetalhes(detalhesFilme.data);
    };

    useEffect(() => {
      consultarDetalhes();
    },[]);
    
    return (
        <div>
            <h1>{detalhes.title}</h1>
            <h2>Overview</h2>
            <p>{detalhes.overview}</p>
            <h3>Lançamento</h3>
            <p>{detalhes.release_date}</p>
            <Link to={"/"}>Voltar</Link>
        </div>
    )

};
