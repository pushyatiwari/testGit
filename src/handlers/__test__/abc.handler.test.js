const { abcgetHandler } = require('../abc.handler.js');
const services = require('../../services/abc.service.js');

describe('abcgetHandler', () => {
  it('should pass the test', () => {
    const spyOnAbcgetService = jest.spyOn(services, 'abcgetService');
    //TODO
  });
});
