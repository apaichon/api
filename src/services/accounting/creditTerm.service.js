const { creditTerm } = require('./creditTerm.class');
const createModel = require('../../models/creditTerm.model');
const hooks = require('./creditTerm.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/creditTerm', new creditTerm(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('creditTerm');

  service.hooks(hooks);
};
