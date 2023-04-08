import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, price, subtitle, title, isbn13 } = book;
    return (
        <div className="overflow-hidden relative transition duration-200 hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
            <figure><img className='object-cover' src={image} alt="book-cover w-full h-56 md:h-64 xl:h-80" /></figure>
            <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 px-6 py-4">
                <p className='text-xl font-medium'>{title}</p>
                <br />
                <p className='text-xl font-medium'>{subtitle}</p>
                <br />
                <p className='text-xl font-medium'>Price: {price}</p>
                <br />
                <div className="card-actions justify-end">
                    <Link to={`../book/${book.isbn13}`}> <button className="btn btn-primary">Show Detail</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Book;