import { Character } from './character'
import { Push } from './push'
import { Timestamped } from './timestamped'
import { Tone } from './tone'
export interface Scene extends Timestamped {
  id?: number
  question: string
  resolution?: string
  tone?: Tone
  requiredCharacters: string[]
  bannedCharacters: string[]
  characters: Character[]
  pushes: Push[]
}
