import app from '../../src/app'

describe('\'focuses\' service', () => {
  it('registered the service', () => {
    const service = app.service('focuses')
    expect(service).toBeTruthy()
  })
})
