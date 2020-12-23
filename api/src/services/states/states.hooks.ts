import * as authentication from '@feathersjs/authentication'
import { HookContext } from '@feathersjs/feathers'

const { authenticate } = authentication.hooks

const dump = function (context : HookContext) : HookContext {
  // console.log('states.before.find.dump', context.params)
  return context
}

export default {
  before: {
    all: [],
    find: [ dump ],
    get: [ dump ],
    create: [ authenticate('jwt') ],
    update: [ authenticate('jwt') ],
    patch: [ authenticate('jwt') ],
    remove: [ authenticate('jwt') ],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
