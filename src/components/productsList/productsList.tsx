import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/dispatchAndSelector';
import './movies.scss';
import { getProductsList } from '../../store/thunks/productsList/productsList';
import { Product } from '../../interfaces/product';

// interface CreateMovieParams {
//     movies: Movie[];
//     deleteNote(index: number): void;
// }

export const ProductsList = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.productsList);

    useEffect(() => {
        dispatch(getProductsList());
    }, [dispatch]);

    return (
        <table
            className={'app-table table-movies'}
        >
            <thead
                className={'table-movies__thead'}
            >
                <tr>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Цена</th>
                </tr>
            </thead>
            {
                products.map((product: Product, index: number) => (
                    <tr
                        key={index}
                        className={'table-movies__item movies-item'}
                    >
                        <td
                            className={'movies-item__td item-td'}
                        >
                            {product.name}
                        </td>
                        <td
                            className={'movies-item__td item-td'}
                        >
                            {product.category}
                        </td>
                        <td
                            className={'movies-item__td item-td '}
                            id={'date-td'}
                        >
                            {product.price}
                        </td>
                    </tr>
                ))
            }
        </table>
        // <table
        //     className={'app-table table-movies'}
        // >
        //     <thead
        //         className={'table-movies__thead'}
        //     >
        //         <tr>
        //             <th>Title</th>
        //             <th>Rate</th>
        //             <th>Date</th>
        //             <th>Description</th>
        //             <th></th>
        //         </tr>
        //     </thead>
        //     {
        //         props.movies.map((movie: Movie, index: number) => (
        //             <tr
        //                 key={index}
        //                 className={'table-movies__item movies-item'}
        //             >
        //                 <td
        //                     className={'movies-item__td item-td'}
        //                 >{movie.title}</td>
        //                 <td
        //                     className={'movies-item__td item-td'}
        //                 >{movie.rate}</td>
        //                 <td
        //                     className={'movies-item__td item-td '}
        //                     id={'date-td'}
        //                 >{movie.date}</td>
        //                 <td
        //                     className={'movies-item__td item-td'}
        //                     id={'comment-td'}
        //                 >{movie.comment.substring(0, lenghtComment)}</td>
        //                 <td
        //                     className={'movies-item__td item-td'}
        //                 >
        //                     <button
        //                         className={'item-td__btn'}
        //                         onClick={() => props.deleteNote(index)}
        //                     >
        //                         <img className={'item-td__img'} src={deleteIcon} alt={'delete'} />
        //                     </button>
        //                 </td>
        //             </tr>
        //         ))
        //     }
        // </table>
    );
};
