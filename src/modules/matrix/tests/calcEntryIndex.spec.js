import { expect } from 'chai';

import calcEntryIndex from '../calcEntryIndex';

describe('modules/calcEntryIndex', () => {
    it("colCount 2, entry (0, 0), expect 0", () => {
        expect(calcEntryIndex({
            colCount: 2,
            row: 0,
            col: 0
        })).to.eql(0);
    })

    it("colCount 4, entry (1, 0), expect 4", () => {
        expect(calcEntryIndex({
            colCount: 4,
            row: 1,
            col: 0
        })).to.eql(4);
    })

    it("colCount 3, entry (4, 2), expect 14", () => {
        expect(calcEntryIndex({
            colCount: 3,
            row: 4,
            col: 2
        })).to.eql(14);
    })
})