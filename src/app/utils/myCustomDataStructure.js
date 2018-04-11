/**
 * It is my custom structure of data.
 * It contains sorted array (by item.id field), because we need faster search by id
 * It need that we be able to do fast search in reducers, and then work
 * with it like simple array (copy part of array, slice(), map() )
 *
 */

export default class MyCustomDataStructure {

    list;

    constructor(list = []) {
        this.sort();
        this._list = list;
    }

    add(item) {
        const { id } = item;
        const index = this.find(id);
        this.list = [
            ...this.list.slice(0, index),
            item,
            ...this.list.slice(index)
        ];
        return index;
    }

    remove(item) {
        const { id } = item;
        const index = this.find(id);
        this.list = [
            ...this.list.slice(0, index),
            ...this.list.slice(index + 1)
        ];
        return index;
    }

    comparator(item1, item2) {
        return item1.id - item2.id;
    }

    sort() {
        this.list.sort(this.comparator);
    }

    // binarySearch
    find(id, arr = [...this.list]) {
        if (!arr.length) return -1;
        let mid = Math.floor(arr.length / 2);

        if (arr[mid].id === id) {
            return mid;
        } else if (arr[mid].id < id && arr.length > 1) {
            return this.find(id, arr.splice(mid, Number.MAX_VALUE));
        } else if (arr[mid].id > id && arr.length > 1) {
            return this.find(id, arr.splice(0, mid));
        } else {
            return -1;
        }
    }


    get list() {
        return this._list;
    }

    set list(value) {
        this._list = value;
    }
}