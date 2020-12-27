import { Timestamped } from './timestamped'
export interface Proposal extends Timestamped {
  id?: number
  term: string
  player: string
}
