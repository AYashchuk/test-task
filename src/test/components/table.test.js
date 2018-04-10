import React from 'react';
import { shallow } from 'enzyme';
import TableComponent from '../../app/components/table.component';
import faker from 'faker';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createUtils from "../../app/utils/utils";

configure({ adapter: new Adapter() });

const countTypes = 4;
const countOfTables = 20;
let utils;
let tables;

beforeAll(() => {
    utils = createUtils(countTypes, countOfTables);
    tables = utils.generateData();
});


describe('Table component', () => {
    it('renders table with warning', () => {
        const name = faker.random.word(3);
        const id = faker.random.number();
        const maxPlayers = faker.random.number();
        const players = faker.random.number();
        const warning = true;
        const type = 'type_1';
        const component = shallow(<TableComponent
            id={id}
            name={name}
            players={players}
            maxPlayers={maxPlayers}
            warning={warning}
            type={type}
        />);
        const namePart = <span className="name">{name}</span>;
        expect(component.contains(namePart)).toEqual(true);
    });
});
