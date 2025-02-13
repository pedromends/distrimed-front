<template>
  <div class="q-pa-md">
    <h5>{{ pageTitle }}</h5>
    <FullCalendar :options="calendarOptions" class="q-mt-md" />
    <q-dialog v-model="createDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Selecione um horário</div>
        </q-card-section>
        <q-separator />
        <div>
          <q-input
            filled
            v-model="eventTitle"
            label="Nome do evento"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Por favor digite algo']"
          />
          <q-time v-model="hour" mask="HH:mm" color="blue" />
        </div>
        <q-card-actions align="around">
          <q-btn color="primary" @click="saveNewEvent()">Marcar</q-btn>
          <q-btn color="red" v-close-popup>Cancelar</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Modal para editar evento -->
    <q-dialog v-model="editDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar Evento</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="eventTitle" label="Título do Evento" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Excluir" color="negative" @click="deleteEvent" />
          <q-btn flat label="Salvar" color="primary" @click="saveEvent" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction' // Para interatividade (arrastar/soltar, clique, etc.)
import ptLocale from '@fullcalendar/core/locales/pt'

export default {
  name: 'FullCalender',
  props: {
    pageTitle: String,
    eventsProp: Array, // Alterado para Array, pois eventos são geralmente uma lista
  },
  components: { FullCalendar },
  data() {
    return {
      editDialog: false,
      eventTitle: '',
      selectedEvent: null,
      createDialog: false,
      locale: 'pt-br',
      auxDate: null,
      hour: null,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        locales: [ptLocale],
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        weekends: true,
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        eventDrop: this.handleEventDrop,
        dayMaxEvents: false,
        dayMaxEventRows: 3,
        moreLinkClick: 'popover',
        events: null,
      },
    }
  },
  methods: {
    toggleWeekends() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends
    },
    handleDateClick(info) {
      const today = new Date()
      const clickedDate = new Date(info.dateStr)

      if (clickedDate < today.setHours(0, 0, 0, 0)) {
        alert('Não é possível agendar eventos em datas passadas.')
        console.log(info)
      } else {
        this.createDialog = true
        this.auxDate = info
      }
    },
    handleEventClick(info) {
      this.selectedEvent = info.event
      this.eventTitle = this.selectedEvent.title
      this.editDialog = true
    },
    saveNewEvent() {
      if (this.eventTitle != '') {
        const [h, m] = this.hour.split(':').map(Number)
        const newEventStart = new Date(this.auxDate.date.setHours(h, m))
        const newEventEnd = new Date(newEventStart.getTime() + 60 * 60 * 1000) // 1 hora de duração
        const hasConflict = this.eventsProp.some((event) => {
          const eventStart = new Date(event.start)
          const eventEnd = new Date(event.end || eventStart.getTime() + 60 * 60 * 1000) // Se não houver end, assume 1 hora

          return (
            event.location === this.pageTitle &&
            ((newEventStart >= eventStart && newEventStart < eventEnd) ||
              (newEventEnd > eventStart && newEventEnd <= eventEnd) ||
              (newEventStart <= eventStart && newEventEnd >= eventEnd))
          )
        })

        if (hasConflict) {
          alert('A sala já está reservada neste horário.')
          return
        }

        this.events.push({
          id: String(Date.now()),
          title: this.eventTitle,
          start: newEventStart.toISOString(),
          end: newEventEnd.toISOString(),
          location: this.pageTitle,
        })

        this.createDialog = false
        this.eventTitle = ''
        this.hour = ''
      }
    },
    saveEvent() {
      if (this.selectedEvent) {
        this.selectedEvent.setProp('title', this.eventTitle)
        this.editDialog = false
      }
    },
    deleteEvent() {
      if (this.selectedEvent) {
        this.selectedEvent.remove()
        this.editDialog = false
      }
    },
    handleEventDrop(info) {
      console.log(
        `Evento ${info.event.title} movido para ${info.event.start.toISOString().slice(0, 10)}`,
      )
    },
  },
}
</script>

<style scoped>
.q-pa-md {
  max-width: 800px;
  margin: auto;
}
</style>
