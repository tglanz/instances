/*
    Used to determine a matrix enty (x, y) inside a vector representation

    |a1, a2, a3|
    |a4, a5, a6|  = [a1, a2, ..., a9]
    |a7, a8, a9|
*/

export default ({ colCount, col, row }) => row * colCount + col;