import { Timestamped } from './timestamped'
export interface User extends Timestamped {
  id?: number
  nickname: string
  email: string
}
