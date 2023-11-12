import React, { Component } from 'react';
import './styles/app.scss';
import { ProductsList } from './components/productsList/productsList';
import { Filter } from './components/filter/filter';

class App extends Component<{}, {}> {
    render() {
        return (
            <div className={'app'}>
                <main>
                    <div className={'container'}>
                        <h1 className={'app__title'}>
                            Продукты
                        </h1>
                        <Filter/>
                        <ProductsList/>                       
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
