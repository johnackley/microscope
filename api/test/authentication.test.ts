import app from '../src/app'
import { User } from '../src/models/user.model'

describe('authentication', () => {
  it('registered the authentication service', () => {
    expect(app.service('authentication')).toBeTruthy()
  })
  
  describe('local strategy', () => {
    const userInfo = {
      email: 'someone@example.com',
      password: 'supersecret',
      mobile: '1234567890',
      firstname: 'Some',
      lastname: 'One',
      avatar: 'some-one.png',
      superadmin: false,
    }
    let testUser: User | undefined = undefined

    beforeAll(async () => {
      try {
        testUser = await app.service('users').create(userInfo)
        // console.log('testUser', testUser)
      } catch (error) {
        console.log('error inserting test user', error)
        // Do nothing, it just means the user already exists and can be tested
      }
    })

    afterAll(async () => {
      try {
        if (testUser) {
          await app.service('users').remove(testUser.id)
        }
      } catch (error) {
        console.log('error deleting test user', error)
        // Do nothing, it just means the user already exists and can be tested
      }
    })

    it('authenticates user and creates accessToken', async () => {
      const { user, accessToken } = await app.service('authentication').create({
        strategy: 'local',
        email: userInfo.email,
        password: userInfo.password,
      }, {})
      
      expect(accessToken).toBeTruthy()
      expect(user).toBeTruthy()
    })
  })
})
