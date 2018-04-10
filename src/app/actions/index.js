import faker from 'faker';

export const CHANGE_PLAYERS = 'CHANGE_PLAYERS';
export const SET_WARNING = 'SET_WARNING';
export const UNSET_WARNING = 'UNSET_WARNING';
export const ADD_TABLE = 'ADD_TABLE';
export const DELETE_TABLE = 'DELETE_TABLE';
export const UPDATE_MANY_TABLES = 'UPDATE_MANY_TABLES';

export function addTable(sourceTable) {
    return {
        type: ADD_TABLE,
        sourceTable
    };
}

export function deleteTable(id) {
    return {
        type: DELETE_TABLE,
        id
    };
}

export function setWarning(id) {
    return {
        type: SET_WARNING,
        id
    };
}

export function unsetWarning(id) {
    return {
        type: UNSET_WARNING,
        id
    };
}

export function changePlayers(id, quantity) {
    return {
        type: CHANGE_PLAYERS,
        quantity,
        id
    };
}

export const availableChanges = [
    CHANGE_PLAYERS,
    SET_WARNING,
    UNSET_WARNING
];

export function generateRandomChanges(countOfTables) {
    const tablesForChanging = faker.random.number(50) || 1;
    const changes = [];
    for (let i = 0; i < tablesForChanging; i++) {
        const type = availableChanges[faker.random.number(2)];
        const id = faker.random.number(countOfTables);
        const change = {
            type,
            id,
            players: (maxPlayers) =>  faker.random.number(maxPlayers-1)
        };
        changes.push(change);
    }
    return {
        type: UPDATE_MANY_TABLES,
        changes
    };
}