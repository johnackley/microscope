import { Game } from './game'
import { Timestamped } from './timestamped'
export interface Team extends Timestamped {
  id?: number
  name: string
  players: string[]
  games: Game[]
}
