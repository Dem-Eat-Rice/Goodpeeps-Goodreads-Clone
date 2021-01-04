
export const getMovieToAddToShelf = data => async dispatch => {
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
            type: 'ADD_ONE',
            moviesOnShelf,
        })        
        return moviesOnShelf;
    }
}