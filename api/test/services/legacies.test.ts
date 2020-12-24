import app from '../../src/app'

describe('\'legacies\' service', () => {
  it('registered the service', () => {
    const service = app.service('legacies')
    expect(service).toBeTruthy()
  })
})
