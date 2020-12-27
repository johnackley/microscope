import { Timestamped } from './timestamped'
export interface Vote extends Timestamped {
  id?: number
  name: string
}
