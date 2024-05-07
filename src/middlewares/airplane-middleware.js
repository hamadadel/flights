const { StatusCodes } = require('http-status-codes');

const { ResponseError } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
  if (!req.body.model) {
    ResponseError.message = 'something went wrong while creating airplane';
    ResponseError.error = new AppError(
      'Airplane model is missing',
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ResponseError);
  } else if (!req.body.capacity) {
    ResponseError.message = 'something went wrong while creating airplane';
    ResponseError.error = new AppError(
      'Airplane capacity is missing',
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ResponseError);
  }

  next();
}

module.exports = {
  validateCreateRequest,
};
