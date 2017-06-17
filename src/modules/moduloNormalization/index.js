import { compose, divide, modulo, __ } from 'ramda';

export default normalization => compose(
    divide(__, normalization),
    modulo(__, normalization)
);