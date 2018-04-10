import PropTypes from 'prop-types';
import * as React from 'react';
import { getTypeToImageMapper } from '../utils/utils';

function TableComponent(props) {
    const mapper = getTypeToImageMapper();
    return (
        <div className={`table ${props.warning ? "warning" : ""}`}>
            <div className="header">
                <span className="name-string">
                    Name:
                </span>
                <span className="name">
                    {props.name}
                </span>
            </div>
            <div className="image">
                <img alt="table_img" src={mapper[props.type]} />
            </div>
            <div>
                <div className="info">
                    <span>Players:</span>
                    <span className="bold">{props.players}</span>
                </div>
                <div className="info">
                    <span>MaxPlayers:</span>
                    <span className="bold">{props.maxPlayers}</span>
                </div>
                {props.warning ?
                    (<div className="info">
                        <button onClick={() => props.unsetWarning(props.id)}>
                            Fix warning
                        </button>
                    </div>)
                    : null}
            </div>
        </div>
    );
}

TableComponent.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired,
    warning: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    unsetWarning: PropTypes.func.isRequired,

};

export default TableComponent;