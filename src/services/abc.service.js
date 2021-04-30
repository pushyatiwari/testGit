const utils = require('../utils/index.js');

const abcgetService = async req => {
  const one = await utils.makeAPICall(`https://www.typeyoururl.com`, 'GET', {});
  return one;
};
module.exports = { abcgetService };
