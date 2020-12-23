import app from '../../src/app'

describe('\'countries\' service', () => {
  it('registered the service', () => {
    const service = app.service('countries')
    expect(service).toBeTruthy()
  })
})
