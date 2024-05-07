const { StatusCodes } = require('http-status-codes');

const { ResponseError } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ResponseError.message = 'something went wrong while creating city';
    ResponseError.error = new AppError(
      'city name is missing',
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ResponseError);
  }

  next();
}

module.exports = {
  validateCreateRequest,
};
