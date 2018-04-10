import {
    CHANGE_PLAYERS,
    SET_WARNING,
    UNSET_WARNING,
    // ADD_TABLE,
    // DELETE_TABLE,
    UPDATE_MANY_TABLES
} from '../actions/index';

function changePlayers(state, {id, players}) {
    if (state) {
        const newState = new Map(state);
        const targetObject = newState.get(id);
        targetObject.players = players > targetObject.maxPlayers ? targetObject.maxPlayers : players;
        newState.set(id, targetObject);
        return newState;
    } else return state;
}

function unsetWarning(state, {id}) {
    if (state) {
        const newState = new Map(state);
        const targetObject = newState.get(id);
        targetObject.warning = false;
        newState.set(id, targetObject);
        return newState;
    } else return state;
}

function setWarning(state, {id}) {
    if (state) {
        const newState = new Map(state);
        const targetObject = newState.get(id);
        targetObject.warning = true;
        newState.set(id, targetObject);
        return newState;
    } else return state;
}

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_PLAYERS:
            return changePlayers(state, action);
        case SET_WARNING:
            return setWarning(state, action);
        case UNSET_WARNING:
            return unsetWarning(state, action);
        case UPDATE_MANY_TABLES:
            return updateManyTablesReducer(state, action);
        default:
            return state;
    }
};


function updateManyTablesReducer(state, action) {
    const newState = new Map(state);
    action.changes.forEach(({id, warning, players, type}) => {
        const table = newState.get(id);
        if (table) {
            switch (type) {
                case CHANGE_PLAYERS:
                    table.players = players(table.maxPlayers);
                    break;
                case SET_WARNING:
                    table.warning = true;
                    break;
                case UNSET_WARNING:
                    table.warning = false;
                    break;
                default:
                    return state;
            }
            newState.set(id, table);
        }
    });
    return newState;
}

export default reducer;