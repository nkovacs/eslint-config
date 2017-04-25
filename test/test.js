export df from './test2.js';
export * as star from './test2.js';

const foo = {
    a: 1,
    b: 2,
};

const foo2 = { a: 1, b: 2, c: 3 };

const foo3 = {
    a: 1,
};

export { foo2 };
export { foo3 };

const bar = 1;
const baz = 2;
const object = { bar, baz };

const { bar2, baz2 } = object;

export { object };
export const object2 = { bar2, baz2 };

export default foo;
