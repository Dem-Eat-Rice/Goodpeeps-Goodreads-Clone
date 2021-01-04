export const getAllMovies = () => async dispatch => {
    const response = await fetch(`/api/movies`);

    if (response.ok) {
        const list = await response.json();
        dispatch({
            type: 'movies/LOAD',
            list,
        });
    }
};

export const getOneMovie = (movie) => async dispatch => {
    const response = await fetch(`/api/movies/${movie.id}`);

    if (response.ok) {
        const movie = await response.json();
        dispatch({
            type: 'movie/LOAD',
            movie,
        });
    }
};

module.exports = { getAllMovies, getOneMovie }