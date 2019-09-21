const { gender } = require('./gender.class');
const createModel = require('../../models/gender.model');
const hooks = require('./gender.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/gender', new gender(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('gender');

  service.hooks(hooks);
};
