const { buyerGroup } = require('./buyerGroup.class');
const createModel = require('../../models/buyerGroup.model');
const hooks = require('./buyerGroup.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/buyerGroup', new buyerGroup(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('buyerGroup');

  service.hooks(hooks);
};
