import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../../store/movie.js';
import './movie.css';

const MoviesPage = () => {

    const dispatch = useDispatch();
    const allMovies = useSelector(state => {
        return state.movies
    })
    
    const [ movies, setMovies ] = useState('');
    
    
    useEffect(() => {
        dispatch(getAllMovies())
    }, [movies])

    return (
        <div className="pot">
            {allMovies.map(movie => {
                return (
                    <h1>{movie.title}</h1>
                )
            })}
        </div>
    )
}

export default MoviesPage;