// Initializes the `pushes` service on path `/pushes`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { Pushes } from './pushes.class'
import createModel from '../../models/push.model'
import hooks from './pushes.hooks'

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pushes': Pushes & ServiceAddons<any>
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  }

  // Initialize our service with any options it requires
  app.use('/pushes', new Pushes(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('pushes')

  service.hooks(hooks)
}
