import '@testing-library/jest-dom';

global.Reflect = {
    getMetadata: jest.fn(),
    defineMetadata: jest.fn(),
};