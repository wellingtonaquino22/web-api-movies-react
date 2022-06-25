import { Container, MovieList, Movie} from "./styles";
import { APIKey } from "../../Config/keys";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


function Home(params) {

    const [movies,setMovies] =  useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(Response => Response.json())
        .then(data=>{
            setMovies(data.results)
            console.log(data.results);
        })
    }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`} ><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;