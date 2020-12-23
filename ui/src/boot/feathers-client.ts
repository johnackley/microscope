import feathers from '@feathersjs/feathers'
import Vue from 'vue'
import client from '../api/feathers-api'
import { BAPServiceTypes } from '../api/api-types'

declare module 'vue/types/vue' {
  interface Vue {
    $api: feathers.Application<BAPServiceTypes>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Vue.prototype.$api = client
