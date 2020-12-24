import app from '../../src/app'

describe('\'characters\' service', () => {
  it('registered the service', () => {
    const service = app.service('characters')
    expect(service).toBeTruthy()
  })
})
