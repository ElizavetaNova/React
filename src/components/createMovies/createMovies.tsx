import { useState } from 'react';
import { Movie } from '../../interfaces/movie';

interface CreateMovieParams {
    //movie: Movie;
    saveMovie(newMovie: Movie): void;
}

export const CreateFilm = (props: CreateMovieParams) => {
    const [movie, setMovie] = useState<Movie>();

    //const onSaveMovie = () => {
    //    props.saveMovie(movie?.title);
    //    setMovie.arguments();
    //};

    return (
        <form
            className={'create-movie'}
        >
            
            <input
                className={'create-movie__title'}
                placeholder='¬ведите название фильма'

            >
            </input>
        </form>
    );
}