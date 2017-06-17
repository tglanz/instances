import Jimp from 'jimp';

import moduloNormalization from 'modules/moduloNormalization';
import { calcEntryIndex } from 'modules/matrix';

const moduloNormalize = moduloNormalization(255);

export default async ({
    url
}) => {

    const image = await Jimp.read(url);

    const colCount = image.bitmap.width;
    const rowCount = image.bitmap.height;

    const matrixVector = [];

    image.grayscale().scan(0, 0, colCount, rowCount, function(x, y, idx) {

        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        // currently not required: const a = this.bitmap.data[idx + 3]

        const normalizedHeight = moduloNormalize(r + g + b);

        const entryIndex = calcEntryIndex({
            colCount,
            col: x,
            row: y
        });

        matrixVector[entryIndex] = normalizedHeight;
    })

    return {
        dimensions: {
            colCount,
            rowCount
        },
        matrixVector: matrixVector,
    }
}