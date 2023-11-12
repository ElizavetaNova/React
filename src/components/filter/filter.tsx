import React, { useEffect, useState } from 'react';
import CATEGORY from './enums/categoryEnum';
import { useAppDispatch, useAppSelector } from '../../store/hooks/dispatchAndSelector';
import { getCategoriesList, getProductsWithFilters } from '../../store/thunks/productsList/productsList';
import { SimpleObject } from '../../interfaces/simpleObject';
import './filter.scss';

const sort: SimpleObject[] = [{ name: 'Цене', value: 'price' }, { name: 'Названию', value: 'price' }];
const order: SimpleObject[] = [{ name: 'По возрастанию', value: 'asc' }, { name: 'По убыванию', value: 'desc' }];

export const Filter = () => {
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector((state) => state.productsList);

    const [checkedCategory, setCheckedCategory] = useState<string>('ALL');
    const [name, setName] = useState<string>('');
    const [sortedBy, setSortedBy] = useState<string>('');
    const [orderBy, setOrderdBy] = useState<string>('');

    useEffect(() => {
        dispatch(getCategoriesList());
    }, [dispatch]);

    useEffect(
        () => {
            dispatch(getProductsWithFilters({ filterIs: true, category: checkedCategory, name, sortedBy: sortedBy, order: orderBy }));
        }, [checkedCategory, name, sortedBy, orderBy]);

    return (
        <div
            className={'filters'}
        >
            <div
                className={'filters__block-with-label'}
            >
                <p>
                    Поиск по категории
                </p>
                <select
                    className={'filters__select'}
                    onChange={(e) => setCheckedCategory(e.target.value)}
                    placeholder={'Выберите категорию продукта'}
                >
                    <option value={'ALL'} selected={!!checkedCategory}>
                        Выберите категорию продукта
                    </option>
                    {
                        categories &&
                        categories.map((category: string, index: number) =>
                            <option
                                key={index}
                                value={CATEGORY[category].value}
                            >
                                {CATEGORY[category].name}
                            </option>
                        )
                    }
                </select>
            </div>
            <div
                className={'filters__block-with-label'}
            >
                <p>Сортировать по</p>
                <select
                    className={'filters__select'}
                    onChange={(e) => setSortedBy(e.target.value)}
                >
                    <option value={''} selected disabled>
                        Выберите тип сортировки
                    </option>
                    {
                        sort.map((sort: SimpleObject, index) =>
                            <option
                                key={index}
                                value={sort.value}
                            >
                                {sort.name}
                            </option>
                        )
                    }
                </select>
            </div>
            <div
                className={'filters__block-with-label'}
            >
                <p>Направление сортировки</p>
                <select
                    className={'filters__select'}
                    onChange={(e) => setOrderdBy(e.target.value)}
                >
                    <option value={''} selected disabled>
                        Выберите направление сортировки
                    </option>
                    {
                        order.map((order: SimpleObject, index) =>
                            <option
                                key={index}
                                value={order.value}
                            >
                                {order.name}
                            </option>
                        )
                    }
                </select>
            </div>
            <div
                className={'filters__block-with-label'}
            >
                <p>Поиск по названию</p>
                <input
                    className={'filters__select'}
                    onChange={(value) => setName(value.target.value)}
                    placeholder={'Введите название продукта'}
                />
            </div>
        </div>
    );
};

export { };
