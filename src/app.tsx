import React, { Component } from 'react';
import movies from './MOVIES.json';
import { Header } from './components/header/header';
import './styles/app.scss';
import { Movie } from './interfaces/movie';
import { ProductsList } from './components/productsList/productsList';
import { Form } from './components/createMovies/form';

interface AppState {
    movies: Movie[];
    showForm: boolean;
}

class App extends Component<{}, AppState> {
    
    
    state = {
        movies: [],
        showForm: false,
    };

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm });
    };

    componentDidMount() {
        this.setState({ movies });
    }

    saveMovie = (newMovie: Movie) => {
        const newMovies: Movie[] = this.state.movies;
        newMovies.push({
            id: newMovie.id,
            title: newMovie.title,
            rate: newMovie.rate,
            comment: newMovie.comment,
            date: newMovie.date,
        });
        this.setState({ movies: newMovies });
    };

    deleteNote = (index: number) => {
        const newMovies: Movie[] = this.state.movies;
        newMovies.splice(index, 1);
        this.setState({ movies: newMovies });
    };

    render() {
        return (
            <div className={'app'}>
                <Header/>
                <main>
                    <div className={'container'}>
                        <h1 className={'app__title'}>
                            Movies
                        </h1>
                        <ProductsList/>
                        <div className={'app-add_movie add-movie'}>
                            <button className={'add-movie__btn primary-button'} onClick={this.toggleForm}>
                                {this.state.showForm ? 'Cancel' : 'Add'}
                            </button>
                            {this.state.showForm
                                ? <Form
                                    saveMovie={(newMovie) => this.saveMovie(newMovie)}
                                    hideForm={this.toggleForm}
                                />
                                : null}
                        </div>                        
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
