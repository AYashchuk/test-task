import * as React from 'react';
import App from '../../app/components/app.component';
import createUtils from "../../app/utils/utils";
import { createStore } from 'redux';
import reducer from '../../app/reducers';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


const countTypes = 4;
const countOfTables = 20;
let utils;
let tables;

beforeAll(() => {
    utils = createUtils(countTypes, countOfTables);
    tables = utils.generateData();
});


describe('App component', () => {
    it('renders without crashing', () => {
        const store = createStore(reducer, tables);
        const div = document.createElement('div');
        const interval = 600;
        ReactDOM.render(
            <Provider store={store}>
                <App store={store}
                    interval={interval} />
            </Provider>, div);
    });
});
