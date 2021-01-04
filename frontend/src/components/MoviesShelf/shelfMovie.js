import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToShelf } from '../../store/shelf';
import { getAllMovies } from '../../store/movie';

const MoviesOnShelf = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector(state => {
    return state.movies.list.map(movieId => state.movies[movieId]);
  });
  
  const [status, setStatus] = useState('Want To Watch');
  const [review, setReview] = useState('');
  
  
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleSubmit = async(e) => {
        e.prevent.default(); 
        
        let review = e.currentTarget[1].value;
        
        const payload = {
            status,
            review,
            
        }
        
      const movie = await dispatch(addToShelf(payload));
      if(movie) {
        history.push(`/movies/${movie.movieId}`)
      }

    }
    

    return (
        <form onSubmit={handleSubmit}>  
          <label>
            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option value="Want To Watch">Want To Watch</option>
              <option value="Watching Tonight">Watching Tonight</option>
              <option value="Watched">Watched</option>
            </select>
          </label>
          <div>
            <label>Review:</label>
          </div>
          <div>
            <textarea value={review} onChange={e => setReview(e.target.value)} />
          </div>
          <input type="submit" value="Submit" />
         
        </form>
    );
}

export default MoviesOnShelf;