// Initializes the `legacies` service on path `/legacies`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { Legacies } from './legacies.class'
import createModel from '../../models/legacy.model'
import hooks from './legacies.hooks'

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'legacies': Legacies & ServiceAddons<any>
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  }

  // Initialize our service with any options it requires
  app.use('/legacies', new Legacies(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('legacies')

  service.hooks(hooks)
}
