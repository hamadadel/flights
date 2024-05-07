const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
  constructor(model) {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
