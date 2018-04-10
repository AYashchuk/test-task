import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../app/components/app.component';
import reducer from "../app/reducers";
import createUtils from "../app/utils/utils";
import {createStore} from "redux/index";


it('renders without crashing', () => {
    const countTypes = 4;
    const countOfTables = 500;
    const interval = 600;
    const utils = createUtils(countTypes, countOfTables);
    const tables = utils.generateData();
    const store = createStore(reducer, tables);
    const div = document.createElement('div');
    ReactDOM.render(<App store={store}
                         interval={interval}/>, div);
});
