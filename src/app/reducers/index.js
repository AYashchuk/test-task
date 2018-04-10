import {
    CHANGE_PLAYERS,
    SET_WARNING,
    UNSET_WARNING,
    // ADD_TABLE,
    // DELETE_TABLE,
    UPDATE_MANY_TABLES
} from '../actions/index';

function changePlayers(state, { id, quantity }) {
    if (state) {
        const newState = new Map(state);
        const targetObject = {...newState.get(id)};
        targetObject.players = quantity;
        newState.set(id, targetObject);
        return newState;
    } else return state;
}

function unsetWarning(state, { id }) {
    if (state) {
        const newState = new Map(state);
        const targetObject = newState.get(id);
        targetObject.warning = false;
        newState.set(id, targetObject);
        return newState;
    } else return state;
}

function setWarning(state, { id }) {
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
    action.changes.forEach(({ id, warning, players, type }) => {
        const table = {...newState.get(id)};
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
                return newState;
        }
        newState.set(id, table);
    });
    return newState;
}

export default reducer;