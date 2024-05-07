const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      let errorMessages = [];
      error.errors.forEach((error) => {
        errorMessages.push(error.message);
      });
      throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
    }

    if (error.name == 'SequelizeUniqueConstraintError') {
      let errorMessages = [];
      error.errors.forEach((error) => {
        errorMessages.push(error.message);
      });
      throw new AppError(errorMessages, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      'cannot create a new city',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      'cannot fetch cities',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const city = airplaneRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND)
      throw new AppError(error.message, error.statusCode);
    throw new AppError(
      'Not able to fetch city',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteCity(id) {
  try {
    const city = airplaneRepository.delete(id);
    return city;
  } catch (error) {
    throw new AppError(
      'Not able to delete a city',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
};
