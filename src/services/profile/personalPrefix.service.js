const { personalPrefix } = require('./personalPrefix.class');
const createModel = require('../../models/personalPrefix.model');
const hooks = require('./personalPrefix.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/personalPrefix', new personalPrefix(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('personalPrefix');

  service.hooks(hooks);
};
