import { Service } from '@feathersjs/feathers'

import {
  User,
} from '../types'

export interface BAPServiceTypes {
  users: Service<User>
}
