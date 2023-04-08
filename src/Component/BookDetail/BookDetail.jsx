import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const BookDetail = () => {
    const detail = useLoaderData()
    console.log(detail)
    const { image, authors, language, price, publisher, desc, title } = detail;
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-8">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="">{authors}</h2>
                <p>{title}</p>
                <p>language: {language}</p>
                <p>Publisher: {publisher}</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    <Link
                        to='/'
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;