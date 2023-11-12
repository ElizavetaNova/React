import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/dispatchAndSelector';
import './products.scss';
import { getProductsWithFilters } from '../../store/thunks/productsList/productsList';
import { Product } from '../../interfaces/product';
import CATEGORY from '../filter/enums/categoryEnum';

export const ProductsList = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.productsList);

    useEffect(() => {
        dispatch(getProductsWithFilters({ filterIs: false }));
    }, [dispatch]);

    return (
        <table
            className={'app-table table-products'}
        >
            <thead
                className={'table-products__thead'}
            >
                <tr>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.length >= 0 &&
                    products.map((product: Product, index: number) => (
                        <tr
                            key={index}
                            className={'table-products__item'}
                        >
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {CATEGORY[product.category].name}
                            </td>
                            <td>
                                {product.price}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};
