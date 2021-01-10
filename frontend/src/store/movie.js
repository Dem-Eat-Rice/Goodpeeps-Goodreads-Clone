import { fetch } from './csrf';

const GET_ALL_MOVIES = 'movies/setMovies';

const setMovies = (movies) => {
    return {
        type: GET_ALL_MOVIES,
        movies: movies
    }
}

export const getAllMovies = () => async (dispatch) => {
    const response = await fetch(`/api/movies`);

    if (response.ok) {
        const list = await response.json();
        dispatch(setMovies(list.data.movies));
    }
};

const initialState = [];

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case GET_ALL_MOVIES:
            newState = action.movies;
            return newState;
        default:
            return state;
    }
}

export default reducer;
// export const getOneMovie = (movie) => async dispatch => {
//     const response = await fetch(`/api/movies/${movie.id}`);

//     if (response.ok) {
//         const movie = await response.json();
//         dispatch({
//             type: 'movie/LOAD',
//             movie,
//         });
//     }
// };
