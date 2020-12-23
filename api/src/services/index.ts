import { Application } from '../declarations'
import users from './users/users.service'
import countries from './countries/countries.service'
import states from './states/states.service'
import teams from './teams/teams.service'
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users)
  app.configure(countries)
  app.configure(states)
  app.configure(teams)
}
