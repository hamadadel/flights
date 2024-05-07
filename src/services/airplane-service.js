const AirplaneRepository = require('../repositories/airplane-repository');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      let errorMessages = [];
      error.errors.forEach((error) => {
        errorMessages.push(error.message);
      });
      throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      'cannot create a new airplane',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      'cannot fetch airplanes',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND)
      throw new AppError(error.message, error.statusCode);
    throw new AppError(
      'Not able to fetch airplane',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
};
