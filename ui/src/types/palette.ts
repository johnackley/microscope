import { Proposal } from './proposal'
import { Timestamped } from './timestamped'
export interface Palette extends Timestamped {
  id?: number
  name: string
  add: Proposal[]
  ban: Proposal[]
}
