import { fetch } from './csrf';

const GET_ALL_MOVIES = 'movies/getMovies';
const GET_ONE_MOVIE = 'movies/getOneMovie';


const getMovies = (movies) => {
    return {
        type: GET_ALL_MOVIES,
        movies: movies
    }
}

const getOneMovie = (movie) => {
    return {
        type: GET_ONE_MOVIE,
        movie: movie
    }
}

export const getAllMovies = () => async (dispatch) => {
    const response = await fetch(`/api/movies`);
    // console.log(response)
    if (response.ok) {
        // const listOfMovies = await response.json();
        console.log(response.data)
        dispatch(getMovies(response.data));
    }
};

export const getSingleMovie = (movie) => async dispatch => {
    const response = await fetch(`/api/movies/${movie.id}`);

    if (response.ok) {
        const movie = await response.json();
        dispatch(getOneMovie(movie.data.movie));
    }
};
const initialState = [];

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case GET_ALL_MOVIES:
            newState = action.movies;
            return newState;
        case GET_ONE_MOVIE:
            newState = action.movie;
            return newState;
        default:
            return state;
    }
}

export default reducer;
