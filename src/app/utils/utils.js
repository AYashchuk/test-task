
import faker from 'faker';

let utils;

class Utils {
    _numberOfType = 3;
    _countOfTables = 100;

    constructor(numberOfType, countOfTables) {
        this._numberOfType = numberOfType;
        this._countOfTables = countOfTables;
        this.mapTypeToImage();
    }

    mapTypeToImage() {
        this._mapTypeToImage = {};
        for (let i = 0; i <= this._numberOfType; i++) {
            this._mapTypeToImage[this.getType(i)] = `../images/${i}.png`;
        }
    }

    generateData() {
        const tables = new Map();
        for (let i = 0; i < this._countOfTables; i++) {
            const max = faker.random.number(30) || 1;
            let table = {
                id: i,
                type: this.getType(faker.random.number(this._numberOfType)),
                name: `${faker.lorem.word(3)}`,
                warning: false,
                players: faker.random.number(max),
                maxPlayers: max
            };
            tables.set(table.id, table);
        }
        return tables;
    }

    getType(type) {
        return `type_${type}`;
    }
}


export default (numberOfType, countOfTables) => {
    utils = new Utils(numberOfType, countOfTables);
    return utils;
}

export const getTypeToImageMapper = () => utils._mapTypeToImage;

export const getCountOfTables = () => utils._countOfTables;




