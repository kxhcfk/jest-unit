const testFn = (testId, callback) => {
    if (Array.isArray(testId)) {
        testId.forEach(id => {
            if (id === 1) {
                callback();
            }
        })
    } else {
        if (testId === 1) {
            callback();
        }
    }
}

describe('', () => {
    test('toBe', () => {
        expect(1).toBe(1);
        expect('').toBe('');
        expect('1').toBe('1');
        expect('1').not.toBe(1);
        expect('').not.toBe(0);
        expect('').not.toBe(null);
        expect('').not.toBe(false);
        expect('').not.toBe(true);
        expect('').not.toBe(undefined);
        expect(Infinity).toBe(Infinity);
        expect({}).not.toBe({});
    });

    test('toHaveBeenCalled (toBeCalled)', () => {
        const fn1 = jest.fn();
        const fn2 = jest.fn();

        testFn(1, fn1);
        testFn(2, fn2);

        expect(fn1).toHaveBeenCalled();
        expect(fn2).not.toHaveBeenCalled();
    });

    test('toHaveBeenCalledTimes', () => {
        const fn1 = jest.fn();

        testFn([1, 0, 1], fn1);

        expect(fn1).toHaveBeenCalledTimes(2);
    });

    test('toBeCloseTo', () => {
        expect(0.2 + 0.1).not.toBe(0.3);

        expect(0.23 + 0.1).toBeCloseTo(0.33);
    });

    test('toBeGreaterThan', () => {
        expect(3).toBeGreaterThan(2.9);
    });

    test('toBeGreaterThanOrEqual', () => {
        expect(3).toBeGreaterThanOrEqual(3);
    });

    test('toBeLessThan', () => {
        expect(3).toBeLessThan(3.1);
    });

    test('toBeLessThanOrEqual', () => {
        expect(3).toBeLessThanOrEqual(3);
    });

    test('toBeInstanceOf', () => {
        class Test {
        }

        expect(new Test).toBeInstanceOf(Test);
    });

    test('toBeTruthy', () => {
        expect(' ').toBeTruthy();
        expect(1).toBeTruthy();
        expect(0).not.toBeTruthy();
    });

    test('toBeNaN', () => {
        expect(NaN).toBeNaN();
        expect('123a' / 3).toBeNaN();
    });

    test('toContain', () => {
        expect([1, 123, 3]).toContain(1);
        expect([1, [1, 2], 3]).not.toContain([1, 2]);
    });

    test('toContainEqual', () => {
        expect([1, 123, 3]).toContainEqual(1);
        expect([1, [1, 2], 3]).toContainEqual([1, 2]);
    });

    test('toEqual', () => {
        expect([1, 123, 3, false]).toEqual([1, 123, 3, false]);
        expect({i: 123, a: null}).toEqual({i: 123, a: null, s: undefined});
    });

    test('toStrictEqual', () => {
        expect([1, 123, 3, false]).toStrictEqual([1, 123, 3, false]);
        expect({i: 123, a: null}).not.toStrictEqual({i: 123, a: null, s: undefined});
    });

    test('toMatch', () => {
        expect('123 333').toMatch(/333/);
    });

    test('toMatchObject', () => {
        const a = {
            a: 123,
            b: {
                c: 123,
                b: 123
            }
        }

        const b = {
            b: {
                c: 123,
                b: 123
            }
        }

        expect(a).toMatchObject(b);

        expect([{foo: 'bar'}, {baz: 1}]).not.toMatchObject([{baz: 1}, {foo: 'bar'}])
    });

    test('toThrow', () => {
        expect(() => {throw new Error()}).toThrow();
    });
})