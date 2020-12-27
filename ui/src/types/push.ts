import { Proposal } from './proposal'
import { Timestamped } from './timestamped'
import { Vote } from './vote'
export interface Push extends Timestamped {
  id?: number
  player: string
  proposals: Proposal[]
  votes: Vote[]
}
