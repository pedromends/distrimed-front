<template lang="">
  <div class="q-pa-md row justify-between q-p-md">
    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="blue" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="blue" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      model: ref('2019-02-22 21:02'),
    }
  },
}
</script>
