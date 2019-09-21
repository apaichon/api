const { companyCategory } = require('./companyCategory.class');
const createModel = require('../../models/companyCategory.model');
const hooks = require('./companyCategory.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/companyCategory', new companyCategory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('companyCategory');

  service.hooks(hooks);
};
