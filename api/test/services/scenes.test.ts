import app from '../../src/app'

describe('\'scenes\' service', () => {
  it('registered the service', () => {
    const service = app.service('scenes')
    expect(service).toBeTruthy()
  })
})
