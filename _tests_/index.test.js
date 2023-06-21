import { checkRow, checkColumn } from '../src/index';

describe('checkRow', () => {

    test('should check if row has nine numbers', () => {
        const row = [1];
        expect(checkRow(row)).toBe(false);
    })
    test('should check row to show all number 1-9 with no repeats', () => {
        const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(checkRow(row)).toBe(true);
    });
    test('should check row contain all numbers 1-9 with no repeats', () => {
        const row = [1, 2, 8, 1, 3, 4, 4, 5, 6];
        expect(checkRow(row)).toBe(false);
    });
    test('should check row contain only numbers 1-9 with no repeats', () => {
        const row = [1, 23, 85, 12, 3, 43, 4, 15, 6];
        expect(checkRow(row)).toBe(false);
        })
    })

describe('checkColumn', () => {
    test('should check if column has nine numbers', () => {
        const column = [1];
        expect(checkColumn(column)).toBe(false);
    })
    test('should check column to show all numbers 1-9 with no repeats', () => {
        const column = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(checkColumn(column)).toBe(true);
    })
    test('should check if column contains all numbers 1-9 with no repeats', () => {
        const column = [1, 2, 8, 1, 3, 4, 4, 5, 6];
        expect(checkColumn(column)).toBe(false);
    })
    test('should check if column contains only numbers 1-9 with no repeats', () => {
        const column = [1, 23, 85, 12, 3, 43, 4, 15, 6];
        expect(checkColumn(column)).toBe(false);
    });
})
