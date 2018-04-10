import { connect } from 'react-redux';
import TableList from '../components/tableList.component';
import { unsetWarning } from '../actions/index';

function mapStateToProps(state) {
    return {
        tables: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        unsetWarning: id => dispatch(unsetWarning(id))
    }
}

const TableListContainer = connect(mapStateToProps, mapDispatchToProps)(TableList);

export default TableListContainer;