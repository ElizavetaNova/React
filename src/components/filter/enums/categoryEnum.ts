export enum CategoryEnum {
    MEET = 'MEET',
    VEGETABLES = 'VEGETABLES',
    FRUITS = 'FRUITS',
    BAKERY = 'BAKERY',
    DAIRY = 'DAIRY',
}

export interface CategoryParams {
    [value: string]: { value: string; name: string };

    MEET: { value: string; name: string };
    VEGETABLES: { value: string; name: string };
    FRUITS: { value: string; name: string };
    BAKERY: { value: string; name: string };
    DAIRY: { value: string; name: string };
};

const CATEGORY: CategoryParams = {
    MEET: {
        name: 'Мясо',
        value: 'MEET',
    },
    VEGETABLES: {
        name: 'Овощи',
        value: 'VEGETABLES',
    },
    FRUITS: {
        name: 'Фрукты',
        value: 'FRUITS',
    },
    BAKERY: {
        name: 'Выпечка',
        value: 'BAKERY',
    },
    DAIRY: {
        name: 'Молочные продукты',
        value: 'DAIRY',
    },
};

export default CATEGORY;

export {};