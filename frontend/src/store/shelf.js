
export const addToShelf = data => async dispatch => {
    const response = await fetch(`/api/shelves`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const moviesOnShelf = await response.json();
        dispatch({
            type: 'movies/ADD_ONE',
            moviesOnShelf,
        })
        return moviesOnShelf;
    }
}

export const getShelfMovies = () => async dispatch => {
    const response = await fetch(`/api/shelves`);

    if (response.ok) {
        const list = await response.json();
        dispatch({
            type: 'shelf/LOAD',
            list,
        });
    }
};

export const getMoviesInSingleShelf = shelf => async dispatch => {
    const response = await fetch(`/api/shelves/${shelf.name}`);

    if (response.ok) {
        const moviesInSingleShelf = await response.json();
        dispatch({
            type: 'shelf/LOAD_SHELF',
            moviesInSingleShelf,
        });
    }
};



