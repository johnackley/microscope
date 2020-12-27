import { Scene } from './scene'
import { Timestamped } from './timestamped'
import { Tone } from './tone'
export interface Event extends Timestamped {
  id?: number
  brief: string
  description: string
  tone: Tone
  scenes: Scene[]
}
