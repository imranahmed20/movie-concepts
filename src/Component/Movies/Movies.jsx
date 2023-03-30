import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';
import './movies.css'


const Movies = () => {
    const [movies, setMovies] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    const handleAddToCart = (movie) => {
        const newCart = [...cart, movie]
        console.log(newCart)
        setCart(newCart)
    }
    return (
        <div className='shoes-container'>
            <div className='movies-container'>
                {
                    movies.map(movie => <Movie
                        key={movie.id}
                        movie={movie}
                        handleAddToCart={handleAddToCart}
                    ></Movie>)
                }
            </div>
        </div>
    );
};

export default Movies;