import {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieToAddToShelf } from '../../store/shelf';

const AddMovieToShelf = () => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState('Want To Watch');
    const [review, setReview] = useState('');
    const [shelfId, setShelfId] = useState('');
    const [movieId, setMovieId] = useState('');

    const handleSubmit = (e) => {
        e.prevent.default(); 
        
        let review = e.currentTarget[1].value;
        
        const payload = {
            status,
            review,
            shelfId,
            movieId,
            
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
            <input type="text" value={review} onChange={e => setReview(e.target.value)} />
          </div>
          <input type="submit" value="Submit" />
         
        </form>
    );
}

export default AddMovieToShelf;