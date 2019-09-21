const { amphor } = require('./amphor.class');
const createModel = require('../../models/amphor.model');
const hooks = require('./amphor.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/amphor', new amphor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('amphor');

  service.hooks(hooks);
};
