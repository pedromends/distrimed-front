<template lang="">
  <q-page>
    <FullCalendar :pageTitle="'Sala 1'"  />
  </q-page>
</template>
<script>
import FullCalendar from 'components/FullCalendar.vue'
import listMeetings from '../services/MeetingsService.js'

export default {
  name: 'RoomOne',
  created() {
    listMeetings('Sala 1').then((response) => {
      this.events = response.data
      console.log(this.events)
    })
  },
  components: {
    FullCalendar,
  },
  data() {
    return {
      events: null,
    }
  },
  methods: {

  },
}
</script>
