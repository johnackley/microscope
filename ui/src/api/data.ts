import { User, Action, Character, Event, Game, Legacy, Palette, Pass, Period, Scene, Team, Tone } from '../types'
export const data = {
  users: {
    john: {
      id: 1,
      nickname: 'John',
      email: 'john@johnackley.com',
    } as User,
  },
  teams: {
    'Shenango Wildcards': {
      id: 1,
      name: 'Shenango Wildcards',
      players: ['John', 'Amy', 'Bob'],
      games: [
        {
          name: 'SWC Space Opera',
          bigpicture: 'An uneasy interstellar alliance struggles with a seedy underworld and a shadowy external threat.',
          palette: {
            add: [
              { term: 'FTL', player: 'John' },
              { term: 'AI', player: 'John' },
            ],
            ban: [
              { term: 'Anti-Gravity', player: 'John' },
              { term: 'Time Travel', player: 'John' },
            ],
          } as Palette,
          periods: [
            {
              id: 1,
              brief: 'arrive Eridani B',
              description: 'Humankind generation ship arrives in Eridani B',
              tone: Tone.Light as Tone,
              events: [
                {
                  id: 1,
                  brief: 'meet aliens',
                  description: 'Humans meets aliens',
                  tone: Tone.Dark,
                  scenes: [
                    {
                      id: 1,
                      question: 'How formed the alliance between King and Warlord?',
                      resolution: '',
                      tone: Tone.Dark,
                      requiredCharacters: ['Fred', 'Nancy'],
                      bannedCharacters: [] as string[],
                      characters: [
                        {
                          name: 'Fred',
                          description: 'Kings son',
                          thoughts: 'War must end somehow',
                          player: 'Amy',
                        } as Character,
                        {
                          name: 'Nancy',
                          description: 'Warlords daughter',
                          thoughts: 'I will usurp my fathers power',
                          player: 'Bob',
                        } as Character,
                      ] as Character[],
                    } as Scene,
                  ] as Scene[],
                } as Event,
              ] as Event[],
            } as Period,
            {
              id: 3,
              brief: 'war with aliens',
              description: 'Humans long war with aliens',
              tone: Tone.Dark,
              events: [
                {
                  id: 2,
                  brief: 'attack on aliens',
                  description: 'Humans attack aliens',
                  tone: Tone.Dark,
                  scenes: [
                    {
                      id: 2,
                      question: 'Indefatigable is destroyed',
                      resolution: '',
                      tone: Tone.Dark,
                      characters: [
                        { name: 'Fred', player: 'Amy', thoughts: 'duh!' } as Character,
                        { name: 'Nancy', player: 'Bob', thoughts: 'oh yea!' } as Character,
                      ] as Character[],
                    } as Scene,
                  ] as Scene[],
                } as Event,
              ],
            } as Period,
            {
              id: 4,
              brief: 'peace with aliens',
              description: 'Humans attain truce aliens',
              tone: Tone.Light,
              events: [
                {
                  id: 3,
                  brief: 'Second aliens have FTL',
                  description: 'Humans and first aliens both obtain FTL from third aliens',
                  tone: Tone.Light,
                } as Event,
              ],
            } as Period,
            {
              id: 5,
              brief: 'culture exchange with aliens',
              description: 'Aliens send cultural delegation to Earth',
              tone: Tone.Light,
              events: [
                {
                  id: 4,
                  brief: 'attack on aliens',
                  description: 'Humans attack aliens',
                  tone: Tone.Dark,
                  scenes: [
                    {
                      id: 3,
                      question: 'so-start-ev-1-sc-1',
                      resolution: '',
                      tone: Tone.Dark,
                      characters: [
                        { name: 'Fred', player: 'Amy' } as Character,
                        { name: 'Nancy', player: 'Bob' } as Character,
                      ] as Character[],
                    } as Scene,
                  ] as Scene[],
                } as Event,
              ],
            } as Period,
            {
              id: 2,
              brief: 'averts all-out war',
              description: 'Alliance averts all-out war with neighbors',
              events: [
                {
                  id: 7,
                  brief: 'second aliens offer FTL',
                  description: 'second aliens build ERB gate in Solar System',
                  tone: Tone.Light,
                },
              ] as Event[],
            } as Period,
          ] as Period[],
          legacies: [
            {
              id: 1,
              name: 'FTL',
              player: 'Bob',
              ref: 'Event#1',
            },
          ] as Legacy[],
          passes: [
            {
              num: 1,
              lens: 'John',
              focus: 'alien race discovery',
              actions: [
                {
                  id: 1,
                  player: 'John',
                  text: 'add new period between Start and End',
                  ref: 'Period#3',
                },
                {
                  id: 2,
                  player: 'John',
                  text: 'add new event to war',
                  ref: 'Event#1',
                },
                {
                  id: 3,
                  player: 'Amy',
                  text: 'add new period between War and End',
                  ref: 'Period#4',
                },
                {
                  id: 4,
                  player: 'Bob',
                  text: 'add new event in peace',
                  ref: 'Event#2',
                },
                {
                  id: 5,
                  player: 'John',
                  text: 'add new period between Peace and End',
                  ref: 'Period#5',
                },
                {
                  id: 6,
                  player: 'John',
                  text: 'add new event to war',
                  ref: 'Event#3',
                },
              ] as Action[],
            } as Pass,
          ] as Pass[],
        } as Game,
      ],
    } as Team,
  },
}
