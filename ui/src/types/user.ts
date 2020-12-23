/* eslint-disable camelcase */
export interface User {
  email: string
  id?: number
  password?: string
  firstname: string
  lastname: string
  mobile?: string
  auth0Id?: string
  avatar?: string
  customer_ref?: string
  superadmin: boolean
  created_at: Date
  updated_at: Date
  deleted_at?: Date
}
