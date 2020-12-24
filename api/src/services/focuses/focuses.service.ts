// Initializes the `focuss` service on path `/focuss`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { Focuses } from './focuses.class'
import createModel from '../../models/focus.model'
import hooks from './focuses.hooks'

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'focuses': Focuses & ServiceAddons<any>
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  }

  // Initialize our service with any options it requires
  app.use('/focuses', new Focuses(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('focuses')

  service.hooks(hooks)
}
