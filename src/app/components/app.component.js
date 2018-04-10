import * as React from 'react';
import '../static/app.css';
import TableListContainer from '../containers/tableList.container';
import { getCountOfTables } from '../utils/utils';
import { generateRandomChanges } from '../actions/index';

const logo = require('../static/logo.svg');

class App extends React.Component {

    store;
    interval;
    intervalId;

    constructor(props){
        super(props);
        this.store = props.store;
        this.interval = props.interval;
    }

    componentDidMount() {
        const countOfTables = getCountOfTables();
        this.deleteInterval();
        this.intervalId = setInterval(()=>{
            const newChange = generateRandomChanges(countOfTables);
            this.store.dispatch(newChange);
        }, this.interval);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Casino</h1>
                </header>
                <TableListContainer />
            </div>
        );
    }

    deleteInterval(){
        this.intervalId && clearInterval(this.intervalId);
    }

    componentWillUnmount(){
        this.deleteInterval();
    }
}

export default App;
