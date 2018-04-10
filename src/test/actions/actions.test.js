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


describe('actions', () => {
    it('set warning', () => {
        const id = 1;
        const expectedAction = {
            type: UNSET_WARNING,
            id
        };
        expect(unsetWarning(id)).toEqual(expectedAction)
    });

    it('unset warning', () => {
        const id = 1;
        const expectedAction = {
            type: SET_WARNING,
            id
        };
        expect(setWarning(id)).toEqual(expectedAction)
    });

    it('change players', () => {
        const id = 1;
        const quantity = 30;
        const expectedAction = {
            type: CHANGE_PLAYERS,
            quantity,
            id
        };
        expect(changePlayers(id, quantity)).toEqual(expectedAction)
    });

    it('update many tables', () => {
        const countOfTables = 500;
        const { type, changes } = generateRandomChanges(countOfTables);
        expect(type).toEqual(UPDATE_MANY_TABLES);
        changes.forEach(({ type, id, players }, i) => {
            const maxPlayersOnTable = 5 + i;
            const currentPlayers = players(maxPlayersOnTable);
            expect(id).toBeLessThan(countOfTables);
            expect(availableChanges).toContain(type);
            expect(currentPlayers).toBeGreaterThanOrEqual(0);
        });
    });
});