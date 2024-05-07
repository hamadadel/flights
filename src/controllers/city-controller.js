const { CityService } = require('../services');
const { ResponseSuccess, ResponseError } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

/**
 * POST :/cities
 * req-body {name: Cairo}
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    ResponseSuccess.message = 'successfully created an city';
    ResponseSuccess.data = city;
    return res.status(StatusCodes.CREATED).json(ResponseSuccess);
  } catch (error) {
    ResponseError.error = error;
    return res.status(error.statusCode).json(ResponseError);
  }
}

module.exports = {
  createCity,
};
