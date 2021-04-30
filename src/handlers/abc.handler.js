const services = require('../services/abc.service.js');

const abcgetHandler = async (req, res) => {
  try {
    const result = await services.abcgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { abcgetHandler };
