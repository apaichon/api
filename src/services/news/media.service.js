const { media } = require('./media.class');
const createModel = require('../../models/media.model');
const hooks = require('./media.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/media', new media(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('media');

  service.hooks(hooks);
};
