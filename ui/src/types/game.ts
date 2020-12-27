import { Legacy } from './legacy'
import { Palette } from './palette'
import { Pass } from './pass'
import { Period } from './period'
import { Timestamped } from './timestamped'
export interface Game extends Timestamped {
  id?: number
  name: string
  bigpicture: string
  palette: Palette
  legacies: Legacy[]
  periods: Period[]
  passes: Pass[]
}
