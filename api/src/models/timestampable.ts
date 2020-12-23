import { Model } from 'objection'

export class Timestampable extends Model {
  created_at!: string
  updated_at!: string
  deleted_at: string | undefined

  constructor(){
    super()
  }

  $beforeInsert(): void {
    this.created_at = this.updated_at = new Date().toISOString()
  }

  $beforeUpdate(): void {
    this.updated_at = new Date().toISOString()
  }
}