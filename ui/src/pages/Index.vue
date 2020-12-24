<template>
  <q-page class="flex flex-center">
    <!-- <q-list dense bordered padding >
      <q-item
        v-for="state in states"
        v-bind:key="state.id"
      >
        <q-item-section>
          {{ state.code }} - {{ state.name }}
        </q-item-section>
      </q-item>
    </q-list> -->
  </q-page>
</template>

<script lang="ts">
// import { Paginated } from '@feathersjs/feathers'
import { defineComponent, /* ref, */ onMounted } from '@vue/composition-api'
// import { State } from '../types'

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup (props, context) {
    // const states = ref<State[]>([])

    onMounted(() => {
      // const root = context.root
      // const api = root.$api
      // const statesService = api.service('states')
      // statesService.find({ query: { code: { $in: ['NJ', 'NY', 'OH', 'PA'] } } })
      //   .then((results) => {
      //     const pgResults = results as Paginated<State>
      //     if (pgResults.data && pgResults.data.length > 0) {
      //       states.value = [...pgResults.data]
      //       console.log('got the states:', states)
      //     }
      //   }).catch(_e => {
      //     console.log('error fetching states', _e)
      //   })
    })

    return {}
  },
})
</script>
