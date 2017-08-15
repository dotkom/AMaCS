jest.mock('react');
jest.mock('react-dom');
jest.mock('react-hot-loader');
jest.mock('react-router-dom');
jest.mock('./Routes');
jest.mock('services/ServiceManager');
jest.mock('common/constants');


describe('index', () => {
  it('runs', () => {
    // TODO: This test should probably expect something
    // Now it just checks for syntax errors basically
    require('../');
  });
});
