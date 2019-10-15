// Initializes the `buyPackageHistory` service on path `/buyPackageHistory`
const { BuyPackageHistory } = require('./buyPackageHistory.class');
const createModel = require('../../models/buyPackageHistory.model');
const hooks = require('./buyPackageHistory.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/buyPackageHistory', new BuyPackageHistory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('buyPackageHistory');

  service.hooks(hooks);
};
