const { BadRequest } = require('@feathersjs/errors');
const { authenticate } = require('@feathersjs/authentication').hooks
const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        const { email } = context.data;
        const { total } = await context.service.find({
          query: {
            email,
            $limit: 0
          }
        });

        if (total > 0) {
          throw new BadRequest('Invalid Parameters', {
            errors: { email: 'email is already in use' }
          })
        }
      },
      hashPassword('password')
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
