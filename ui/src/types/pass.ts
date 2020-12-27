import { Action } from './action'
import { Timestamped } from './timestamped'
export interface Pass extends Timestamped {
  id?: number
  num: number
  lens: string // player
  /**
    Focus: a person, a place, a thing, an institution, an Event, a Period, a concept–anything you want
    WHEN IN DOUBT
    Pick a small, concrete Focus, like a particular person or an incident, rather than a broad or vague one. The narrower the Focus, the more detailed and personal the history will be to play.
  */
  focus: string
  actions: Action[]
}
