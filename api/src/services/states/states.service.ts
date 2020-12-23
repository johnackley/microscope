// Initializes the `states` service on path `/states`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { States } from './states.class'
import createModel from '../../models/state.model'
import hooks from './states.hooks'

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'states': States & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  }

  // Initialize our service with any options it requires
  app.use('/states', new States(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('states')

  service.hooks(hooks)
}
