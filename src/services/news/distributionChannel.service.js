const { distributionChannel } = require('./distributionChannel.class');
const createModel = require('../../models/distributionChannel.model');
const hooks = require('./distributionChannel.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/distributionChannel', new distributionChannel(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('distributionChannel');

  service.hooks(hooks);
};
