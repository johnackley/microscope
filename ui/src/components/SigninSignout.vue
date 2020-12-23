<template>
  <q-btn :label="label" @click="clicked">
    <q-dialog
      v-model="showDialog"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6 bg-primary text-white q-pa-md">{{ label }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="email" :label="emailLabel" :dense="dense" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="password" :type="isPwd ? 'password' : 'text'" :label="passwordLabel" :dense="dense" >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Cancel" v-close-popup @click="cancel" />
          <q-btn flat :label="label" v-close-popup @click="signin" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-btn>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SigninSignout',
  props: {},
  data () {
    return {
      auth: undefined,
      showDialog: false,
      dense: true,
      emailLabel: 'Email',
      email: '',
      passwordLabel: 'Password',
      password: '',
      isPwd: true,
    }
  },
  computed: {
    label () {
      return this.isSignedIn ? `Hi ${this.auth.user.firstname} (Sign Out)` : 'Sign In'
    },
    isSignedIn () {
      return this.auth !== undefined
    },
  },
  mounted () {
    const self = this
    this.$api.reAuthenticate().then(() => {
      self.$api.get('authentication').then((auth) => {
        console.log('auth object:', auth)
        self.auth = auth
      })
    })
  },
  methods: {
    clicked () {
      console.log('CLICKED')
      const self = this
      if (this.isSignedIn) {
        this.$api.logout()
        self.auth = undefined
        self.resetDialog()
        self.$emit('signin-event', { event: 'signout' })
      } else {
        this.showDialog = true
      }
    },
    resetDialog () {
      this.email = ''
      this.password = ''
      this.showDialog = false
    },
    cancel () {
      this.resetDialog()
      this.$emit('signin-event', { event: 'cancel' })
    },
    signin () {
      const self = this
      this.$api.authenticate({
        strategy: 'local',
        email: this.email,
        password: this.password,
      }).then(() => {
        console.log('trying auth...')
        self.$api.get('authentication').then((auth) => {
          console.log('auth response:', auth)
          self.auth = auth
          self.resetDialog()
          self.$emit('signin-event', { event: 'signin' })
        })
      }).catch((err) => {
        console.log('auth failed: ', err)
      })
    },
  },
}
</script>
