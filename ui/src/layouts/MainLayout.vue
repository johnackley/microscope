<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn
          v-if="drawer"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ appTitle }}
        </q-toolbar-title>

        <SigninSignout @signin-event="signinEvent" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="drawer"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Admin Menu
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated>
      <q-toolbar>
        <q-toolbar-title class="text-caption">
          {{ copyright }}
        </q-toolbar-title>

        <div class="text-caption">{{ appName }} v{{ appVersion }}</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { SigninEvent } from '../types'
import SigninSignout from 'components/SigninSignout.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { SigninSignout },

  setup (props, context) {
    const appName = ref('microscope-ui')
    const appTitle = ref('Microscope UI')
    const appVersion = ref('1.0.0')
    const copyright = ref('© 2020 Quantum Ogre LLC')
    const drawer = ref(true)
    const leftDrawerOpen = ref(false)

    const signinEvent = (ev : SigninEvent) => {
      console.log('SIGNIN event', ev)
    }

    return { appName, appTitle, appVersion, copyright, drawer, leftDrawerOpen, signinEvent }
  },
})
</script>
