import React, { Component } from 'react';
import movies from './MOVIES.json';
import { Header } from './components/header/header';
import './styles/app.scss';
import { Movie } from './interfaces/movie';
import { Movies } from './components/movieList/movies';
import { Form } from './components/createMovies/form'


interface AppState {
    movies: Movie[];
}

const [showResults, setShowResults] = React.useState(false)
const onClick = () => setShowResults(true)

class App extends Component<{}, AppState> {    

    state = {
        movies: []
    };
    
    componentDidMount() {
        this.setState({ movies});
    }
    saveMovie = (newMovie: Movie) => {
        const newMovies: Movie[] = this.state.movies;
        newMovies.push({
            id: '',
            title: newMovie.title,
            rate: newMovie.rate,
            comment: newMovie.comment,
            date: newMovie.date
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
                            Заметки
                        </h1>
                        <Movies
                            movies={this.state.movies}
                            deleteNote={(index) => this.deleteNote(index)}
                        />
                        <div>
                            <input type="button" value="Add new movie" onClick={onClick} />
                            {showResults ? <Form saveMovie={(newMovie) => this.saveMovie(newMovie)}/> : null}
                        </div>                        
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
