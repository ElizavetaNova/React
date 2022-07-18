import deleteIcon from '../../images/close.svg';
import { Movie } from '../../interfaces/movie';
import './movies.scss';

interface CreateMovieParams {
    movies: Movie[];
    deleteNote(index: number): void;
}

export const Movies = (props: CreateMovieParams) => {
    return (
        <table
            className={'table-movies'}
        >
            <thead
                className={'table-movies__thead'}
            >
                <tr>
                    <th>Title</th>
                    <th>Rate</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            {
                props.movies.map((movie: Movie, index: number) => (
                    <tr
                        key={index}
                        className={'table-movies__item'}
                    >
                        <td>{movie.title}</td>
                        <td>{movie.rate}</td>
                        <td>{movie.date}</td>
                        <td>{movie.comment.substring(0, 200)}</td>
                        <td>
                            <button
                            onClick={() => props.deleteNote(index)}
                            >
                            <img src={deleteIcon} alt={'delete'} />
                            </button>
                        </td>
                    </tr>
                    ))
            }
        </table>
        //<ul
        //    className={'notes'}
        //>
        //    {
        //        props.notes.map((note: Movie, index: number) => (
        //            <li
        //                key={index}
        //                className={'notes__item'}
        //            >
        //                <div>
        //                    <p>
        //                        {note.date}
        //                    </p>
        //                    <p> 
        //                        {note.text}
        //                    </p>
        //                </div>
        //                <button
        //                    onClick={() => props.deleteNote(index)}
        //                >
        //                    <img src={deleteIcon} alt={'delete'} />
        //                </button>
        //            </li>
        //        ))
        //    }
        //</ul>
    );
};
