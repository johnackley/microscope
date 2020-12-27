import { Timestamped } from './timestamped'
export interface Legacy extends Timestamped {
  id?: number
  name: string
  player: string
  ref: string
  data: unknown
}
