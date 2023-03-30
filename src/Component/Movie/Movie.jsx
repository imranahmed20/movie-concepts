import React from 'react';
import './Movie.css'
import Button from 'react-bootstrap/Button';

const Movie = (props) => {
    const { img, name, price, quantity, ratings } = props.movie;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='movie'>
            <img src={img} alt="" />
            <div className='ms-3'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <Button onClick={() => handleAddToCart(props.movie)} className='btn-add w-100 ' variant="primary">SEND EMAIL</Button>
        </div>
    );
};

export default Movie;