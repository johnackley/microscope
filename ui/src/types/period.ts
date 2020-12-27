import { Event } from './event'
import { Timestamped } from './timestamped'
import { Tone } from './tone'
export interface Period extends Timestamped {
  id?: number
  brief: string
  description: string
  tone?: Tone
  events: Event[]
}
