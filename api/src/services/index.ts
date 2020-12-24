import { Application } from '../declarations'
import characters from './characters/characters.service'
import countries from './countries/countries.service'
import events from './events/events.service'
import focuses from './focuses/focuses.service'
import legacies from './legacies/legacies.service'
import palettes from './palettes/palettes.service'
import passes from './passes/passes.service'
import periods from './periods/periods.service'
import pushes from './pushes/pushes.service'
import scenes from './scenes/scenes.service'
import states from './states/states.service'
import teams from './teams/teams.service'
import users from './users/users.service'
import votes from './votes/votes.service'
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(characters)
  app.configure(countries)
  app.configure(events)
  app.configure(focuses)
  app.configure(legacies)
  app.configure(palettes)
  app.configure(passes)
  app.configure(periods)
  app.configure(pushes)
  app.configure(scenes)
  app.configure(states)
  app.configure(teams)
  app.configure(users)
  app.configure(votes)  
}
