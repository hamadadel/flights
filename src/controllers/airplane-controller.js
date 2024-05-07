const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');

const { ResponseSuccess, ResponseError } = require('../utils/common');

/**
 * POST :/airplane
 * req-body {model: airbus a380, capacity: 380}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      model: req.body.model,
      capacity: req.body.capacity,
    });
    ResponseSuccess.message = 'successfully created an airplane';
    ResponseSuccess.data = airplane;
    return res.status(StatusCodes.CREATED).json(ResponseSuccess);
  } catch (error) {
    ResponseError.error = error;
    return res.status(error.statusCode).json(ResponseError);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    ResponseSuccess.message = 'successfully fetched all airplanes';
    ResponseSuccess.data = airplanes;
    return res.status(StatusCodes.OK).json(ResponseSuccess);
  } catch (error) {
    ResponseError.error = error;
    return res.status(error.statusCode).json(ResponseError);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
