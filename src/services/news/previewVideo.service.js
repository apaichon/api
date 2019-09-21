const { previewVideo } = require('./previewVideo.class');
const createModel = require('../../models/previewVideo.model');
const hooks = require('./previewVideo.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/previewVideo', new previewVideo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('previewVideo');

  service.hooks(hooks);
};
