import app from '../../src/app'

describe('\'teams\' service', () => {
  it('registered the service', () => {
    const service = app.service('teams')
    expect(service).toBeTruthy()
  })
})
