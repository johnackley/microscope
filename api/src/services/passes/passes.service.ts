// Initializes the `passes` service on path `/passes`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { Passes } from './passes.class'
import createModel from '../../models/pass.model'
import hooks from './passes.hooks'

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'passes': Passes & ServiceAddons<any>
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  }

  // Initialize our service with any options it requires
  app.use('/passes', new Passes(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('passes')

  service.hooks(hooks)
}
