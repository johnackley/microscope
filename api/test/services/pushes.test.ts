import app from '../../src/app'

describe('\'pushes\' service', () => {
  it('registered the service', () => {
    const service = app.service('pushes')
    expect(service).toBeTruthy()
  })
})
