import reducer from '../../app/reducers';
import {
    unsetWarning,
    setWarning,
    changePlayers,
    generateRandomChanges,
    availableChanges,
    CHANGE_PLAYERS,
    SET_WARNING,
    UNSET_WARNING,
    UPDATE_MANY_TABLES
} from '../../app/actions';
import createUtils from "../../app/utils/utils";
import faker from 'faker';

const countTypes = 4;
const countOfTables = 20;


// beforeEach(() => {
//     utils = createUtils(countTypes, countOfTables);
//     tables = utils.generateData();
// });

describe('reducers', () => {
    it('unknown action', () => {
        const utils = createUtils(countTypes, countOfTables);
        const tables = utils.generateData();
        const unknownAction = {
            type: "UNKNOWN_TYPE",
            id: 1
        };
        expect(
            reducer(tables, unknownAction)
        ).toEqual(tables);
    });


    it('null store', () => {
        const utils = createUtils(countTypes, countOfTables);
        const tables = utils.generateData();
        const unsetWarningAction = unsetWarning(1);
        const expactedState = null;
        expect(
            reducer(null, unsetWarningAction)
        ).toEqual(expactedState);
    });

    it('set warning', () => {
        const utils = createUtils(countTypes, countOfTables);
        const tables = utils.generateData();
        const id = faker.random.number(countOfTables);
        const setWarningAction = {
            type: SET_WARNING,
            id
        };
        const newState = reducer(tables, setWarningAction);
        expect(newState.get(id).warning).toEqual(true);
    });

    it('unset warning', () => {
        const utils = createUtils(countTypes, countOfTables);
        const tables = utils.generateData();
        const id = faker.random.number(countOfTables);
        const unsetWarningAction = {
            type: UNSET_WARNING,
            id
        };
        const newState = reducer(tables, unsetWarningAction);
        expect(newState.get(id).warning).toEqual(false);
    });

    it('change players', () => {
        const utils = createUtils(countTypes, countOfTables);
        const tables = utils.generateData();
        const id = faker.random.number(countOfTables);
        const quantity = faker.random.number(30);
        const changePlayersAction = {
            type: CHANGE_PLAYERS,
            id,
            quantity
        };
        const newState = reducer(tables, changePlayersAction);
        const targetObject = newState.get(id);
        const players = targetObject.players;
        expect(players).toEqual(quantity);
    });

    it('update many data', () => {
        const utils = createUtils(countTypes, countOfTables);
        const tables = utils.generateData();
        const changesEvent = generateRandomChanges(countOfTables);
        const newState = reducer(tables, changesEvent);
        changesEvent.changes.forEach(({ type, id }) => {
            const oldTableData = tables.get(id);
            const newTableData = newState.get(id);

        if (type === CHANGE_PLAYERS) {
            expect(oldTableData.players).not.toBe(newTableData.players);
        } else if (type === SET_WARNING) {
            expect(newTableData.warning).toEqual(true);
        } else if (type === UNSET_WARNING) {
            expect(newTableData.warning).toEqual(false);
        }
    });
});
});