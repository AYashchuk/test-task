import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/components/app.component';
import registerServiceWorker from './registerServiceWorker';
import './app/static/index.css';
import { createStore } from 'redux';
import reducer from './app/reducers';
import { Provider } from 'react-redux';
import createUtils from './app/utils/utils';

const countTypes = 4;
const countOfTableForUpdateAtTheSameTime = 60;
const countOfTables = 500;
const interval = 600;
const utils = createUtils(countTypes, countOfTables, countOfTableForUpdateAtTheSameTime);
const tables = utils.generateData();
const store = createStore(reducer, tables);

ReactDOM.render(
    <Provider store={store}>
        <App store={store}
             interval={interval}
             countOfTableForUpdateAtTheSameTime={countOfTableForUpdateAtTheSameTime}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();