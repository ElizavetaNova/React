import { useState } from 'react';
import { Movie } from '../../interfaces/movie';
//import { Movies } from '../noteList/movies';

interface CreateMovieParams {
    saveMovie(newNovie: Movie): void;
}

export const Form = (props: CreateMovieParams) => {
    const [title, setTitle] = useState<string>('');
    const [rate, setRate] = useState<number>(0);
    const [date, setDate] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const [movie, setMovie] = useState<Movie>({
        id: '',
        title: '',
        rate: 0,
        comment: '',
        date: ''
    });

    const onSaveMovie = () => {
        props.saveMovie(movie);
        setMovie({
            id: '',
            title: title,
            rate: rate,
            comment: comment,
            date: date
        });
    };

   return( <form id="add-app">

        <label>Title : </label>
       <input type="text"
           value={title}
           name={'title'}
           onChange={(event) => setTitle(event.target.value)}
       />

        <label>Rate : </label>
       <input type="text"
           value={rate}
           name={'rate'}
           onChange={(event) => setRate(Number(event.target.value))}
       />

       <label>Date : </label>
       <input type="date"
           value={date}
           name={'date'}
           onChange={(event) => setDate(event.target.value)}
       />

       <label>Description : </label>
       <textarea className={''}
           value={comment}
           name={'comment'}
           onChange={(event) => setComment(event.target.value)}
       />

       <input type="submit" value="Save" onClick={() => onSaveMovie()}/>
   </form>
   )
}