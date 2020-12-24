import app from '../../src/app'

describe('\'passes\' service', () => {
  it('registered the service', () => {
    const service = app.service('passes')
    expect(service).toBeTruthy()
  })
})
