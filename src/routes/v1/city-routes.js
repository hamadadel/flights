const router = require('express').Router();
const { CityController } = require('../../controllers');

router.post('/', CityController.createCity);

const { CityMiddleware } = require('../../middlewares');

// api/v1/cities POST
router.post(
  '/',
  CityMiddleware.validateCreateRequest,
  CityController.createCity
);

module.exports = router;
