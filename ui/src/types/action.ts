import { Timestamped } from './timestamped'
export interface Action extends Timestamped {
  id?: number
  text: string
  ref: string
  data: unknown
  player: string
}
