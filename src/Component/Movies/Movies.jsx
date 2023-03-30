import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './movies.css'


const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='main row'>
            <div className='movies col-md-8 '>

                {
                    movies.map(movie => <Movie movie={movie}></Movie>)
                }
            </div>
            <div className='cart col-md-4'>
                <h2>This is cart container</h2>
            </div>
        </div>
    );
};

export default Movies;