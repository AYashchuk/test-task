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

const countTypes = 4;
const countOfTables = 20;
let utils;
let tables;

beforeAll(() => {
    utils = createUtils(countTypes, countOfTables);
    tables = utils.generateData();
});

describe('reducers', () => {
    it('unknown action', () => {
        const unknownAction = {
            type: "UNKNOWN_TYPE",
            id: 1
        };
        expect(
            reducer(tables, unknownAction)
        ).toEqual(tables);
    });


    it('null store', () => {
        const unsetWarningAction = unsetWarning(1);
        const expactedState = null;
        expect(
            reducer(null, unsetWarningAction)
        ).toEqual(expactedState);
    });
});