import PropTypes from 'prop-types';
import * as React from 'react';
import { getTypeToImageMapper } from '../utils/utils';


class TableComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps){
            if (this.props.warning !== nextProps.warning) {
                return true;
            }
            if (this.props.players !== nextProps.players) {
                return true;
            }
        }
        return false;
    }

    render(){
        const mapper = getTypeToImageMapper();
        const { name, warning, type, maxPlayers, id, unsetWarning, players } = this.props;
        return (
            <div className={`table ${warning ? "warning" : ""}`}>
                <div className="header">
                <span className="name-string">
                    Name:
                </span>
                    <span className="name">
                    {name || ''}
                </span>
                </div>
                <div className="image">
                    <img alt="table_img" src={mapper[type]} />
                </div>
                <div>
                    <div className="info">
                        <span>Players:</span>
                        <span className="bold">{players}</span>
                    </div>
                    <div className="info">
                        <span>MaxPlayers:</span>
                        <span className="bold">{maxPlayers}</span>
                    </div>
                    {warning ?
                        (<div className="info">
                            <button onClick={() => unsetWarning(id)}>
                                Fix warning
                            </button>
                        </div>)
                        : null}
                </div>
            </div>
        );
    }
}

TableComponent.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired,
    warning: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    unsetWarning: PropTypes.func,

};

export default TableComponent;