import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../Hooks/useFetchGif';

const GifGrid = ({ category }) => {

    const { data: images , loading } = useFetchGif(category);

    return (
        <>
        <h2> { category } </h2>
            { loading && <p> Cargando ... </p> }
            <div className='card-grid'>
                {
                    images.map( img => <GifGridItem key={img.id} {...img} /> )
                }
            </div>
        </>
    );
};

export default GifGrid;
