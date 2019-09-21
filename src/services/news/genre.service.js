const { genre } = require('./genre.class');
const createModel = require('../../models/genre.model');
const hooks = require('./genre.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/genre', new genre(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('genre');

  service.hooks(hooks);
};
