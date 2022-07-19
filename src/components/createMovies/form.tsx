import { useState } from 'react';
import { Movie } from '../../interfaces/movie';
//import { Movies } from '../noteList/movies';

interface CreateMovieParams {
    saveMovie(newNovie: Movie): void;
    hiddenForm(showForm: boolean): void;
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
    const onHiddenForm = () => {
        props.hiddenForm(true);
    }
    const onSaveMovie = () => {
        props.saveMovie(movie);
        setMovie({
            id: '',
            title: '',
            rate: 0,
            comment: '',
            date: ''
        });
        
        //console.log(rate)
    };

    return (
        <form id="add-app">

        <label>Title : </label>
             <input type="text"
                value={title}
                name={'title'}
                onChange={(event) => {
                    setTitle(event.target.value);
                    console.log(title)
                    setMovie({
                        id: '',
                        title: title,
                        rate: rate,
                        comment: comment,
                        date: date
                    });
                    }
                }
            />

            <label>Rate : </label>
            <input type="number"
                value={rate}
                name={'rate'}
                onChange={(event) => {
                    setRate(Number(event.target.value))
                    setMovie({
                        id: '',
                        title: title,
                        rate: rate,
                        comment: comment,
                        date: date
                    });
                }}
           />

           <label>Date : </label>
            <input type="date"
                value={date}
                name={'date'}
                onChange={(event) => {
                    setDate(event.target.value)
                    setMovie({
                        id: '',
                        title: title,
                        rate: rate,
                        comment: comment,
                        date: date
                    });
                }}
           />

           <label>Description : </label>
            <textarea className={''}
                value={comment}
                name={'comment'}
                onChange={(event) => {
                    setComment(event.target.value)
                    setMovie({
                        id: '',
                        title: title,
                        rate: rate,
                        comment: comment,
                        date: date
                    });
                }}
           />

            <input type="submit" value="Save" onClick={(event) => {
                event.preventDefault()
                //setMovie({
                //    id: '',
                //    title: title,
                //    rate: rate,
                //    comment: comment,
                //    date: date
                //});
                //console.log(movie.rate)
                onSaveMovie()
                onHiddenForm()
            }}
            />
        </form>
   )
}