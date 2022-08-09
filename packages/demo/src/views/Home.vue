<template>
  <div class="home">
    @TODO
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as core from '@jood/helpdesk-core'
import * as date from '@jood/helpdesk-date'
import * as timer from '@jood/helpdesk-timer'

export default defineComponent({
  setup() {
    console.log('setup')
    console.log('core', core)
    console.log('date', date)
    console.log('timer', timer)
  },
})
</script>
