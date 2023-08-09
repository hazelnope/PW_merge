const { merge } = require('../merge');
// import { merge } from '../merge'

describe('merge function', () => {
    it('should merge two sorted arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const merged = merge(collection_1, collection_2);
        expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
    });
});