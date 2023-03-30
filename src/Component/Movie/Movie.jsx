import React from 'react';
import './Movie.css'

const Movie = (props) => {
    console.log(props.movie)
    const { img, name, price, quantity, ratings } = props.movie;
    return (
        <div className='movie'>
            <img  src={img} alt="" />

        </div>
    );
};

export default Movie;