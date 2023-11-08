import React, { useEffect } from 'react';
import CATEGORY, { CategoryEnum } from './enums/categoryEnum';
import { useAppDispatch, useAppSelector } from '../../store/hooks/dispatchAndSelector';
import { getCategoriesList, setCheckedCategory } from '../../store/thunks/productsList/productsList';

interface FilterSelectProps {
    values: Array<{ value: string, name: string }>;
    onChange: () => void;
}

const FilterSelect = (props: FilterSelectProps) => {
    const { onChange, values } = props;
    return (
        <select className={'custom-select'} onChange={onChange}>
            {
                values.map((value, index) =>
                    <option key={index} value={value.value}>
                        {value.name}
                    </option>
                )
            }
        </select>
    )
}

export const Filter = () => {
    const dispatch = useAppDispatch();
    const { categories, checkedCategory } = useAppSelector((state) => state.productsList);

    console.log(categories);

    useEffect(() => {
        dispatch(getCategoriesList());
    }, [dispatch]);

    const onChangeCategory = (value: string) => {
        dispatch(setCheckedCategory(value));
    }

    return (
        <div>
            <p>Фильтры</p>
            <select
                className={'custom-select'}
                onChange={(e) => onChangeCategory(e.target.value)}
                placeholder={'Выберите категорию продукта'}
            >
                <option value={'ALL'} selected>Выберите категорию продукта</option>
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
    )
}

export { };