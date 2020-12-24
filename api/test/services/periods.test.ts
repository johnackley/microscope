import app from '../../src/app'

describe('\'periods\' service', () => {
  it('registered the service', () => {
    const service = app.service('periods')
    expect(service).toBeTruthy()
  })
})
