import { expect } from 'chai';

import moduloNormalization from '../index';

describe("modules/moduloNormalization", () => {
    it("value is 4, normalizer is 2, expect 0", () => {
        const normalize = moduloNormalization(2);

        expect(normalize(4)).to.eql(0);
    })

    it("value is 3, normalizer is 2, expect .5", () => {
        const normalize = moduloNormalization(2);

        expect(normalize(3)).to.eql(.5);
    })
})