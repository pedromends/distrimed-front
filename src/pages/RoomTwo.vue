<template lang="">
  <q-page>
    <FullCalendar :pageTitle="'Sala 2'" />
  </q-page>
</template>
<script>
  import FullCalendar from 'components/FullCalendar.vue'
  import listMeetings from '../services/MeetingsService.js'
export default {
  created() {
    listMeetings('Sala 2').then((response) => {
      this.events = response.data
      console.log(this.events)
    })
  },
  components:{
    FullCalendar
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="">

</style>
