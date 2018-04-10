import TableComponent from './table.component';
import * as React from 'react';

function TableList(props) {
    const {tables} = props;
    const renderList = () => {
        const list = [];
        for (let key of tables.keys()) {
            const table = tables.get(key);
            list.push(
                <TableComponent
                    key={table.id.toString()}
                    id={table.id}
                    name={table.name}
                    players={table.players}
                    maxPlayers={table.maxPlayers}
                    warning={table.warning}
                    type={table.type}
                    unsetWarning={props.unsetWarning}
                />);
        }
        return list;
    };
    return (
        <section className="tables-list">
            {renderList()}
        </section>
    );
}

export default TableList;