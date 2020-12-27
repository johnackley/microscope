import { Timestamped } from './timestamped'
export interface Character extends Timestamped {
  id?: number
  name: string
  description?: string
  thoughts: string
  player: string
}
