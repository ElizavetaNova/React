import { useState } from 'react';
import { Movie } from '../../interfaces/movie';
import './form.scss';
import React, { Component } from 'react';


interface CreateMovieParams {
    saveMovie(newNovie: Movie): void;
    hideForm(showForm: boolean): void;
}

export const Form = (props: CreateMovieParams) => {
    const [title, setTitle] = useState<string>('');
    const [rate, setRate] = useState<number>(0);
    const [date, setDate] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const HideForm = () => {
        props.hideForm(true);
    };

    const onSaveMovie = () => {
        const newMovie: Movie = {
            id: '',
            title,
            rate,
            comment,
            date
        };
        props.saveMovie(newMovie);
        HideForm();
    };

    return (
        <form className={'add-movie__form'} >

            <label>Title : </label>
            <input type={'text'}
                value={title}
                name={'title'}
                onChange={(event) => {
                    setTitle(event.target.value);
                    
                }}
            />

            <label>Rate : </label>
            <input type="number"
                value={rate}
                name={'rate'}
                max={5}
                min={0}
                onChange={(event) => {
                    setRate(Number(event.target.value));
                    
                }}
            />

            <label>Date : </label>
            <input type="date"
                value={date}
                name={'date'}
                onChange={(event) => {
                    setDate(event.target.value);
                    
                }}
            />

            <label>Description : </label>
            <textarea
                value={comment}
                name={'comment'}
                onChange={(event) => {
                    setComment(event.target.value);
                    
                }}
            />

            <input type="submit" value="Save" onClick={(event) => {
                event.preventDefault();
                onSaveMovie();
            }}
            />
        </form>
    );
};
