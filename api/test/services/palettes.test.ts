import app from '../../src/app'

describe('\'palettes\' service', () => {
  it('registered the service', () => {
    const service = app.service('palettes')
    expect(service).toBeTruthy()
  })
})
