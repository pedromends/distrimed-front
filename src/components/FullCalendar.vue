<template>
  <div class="q-pa-md">
    <q-btn @click="toggleWeekends" color="primary" label="Alternar Finais de Semana" />

    <FullCalendar :options="calendarOptions" class="q-mt-md" />

    <q-dialog v-model="fullWidth" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">Selecione uma data</div>
        </q-card-section>
        <q-separator />
        <div>
          <DatePicker />
        </div>
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
import DatePicker from 'components/DatePicker.vue'

export default {
  components: { FullCalendar, DatePicker },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        editable: true, // Permite mover eventos
        selectable: true, // Permite clicar para adicionar eventos
        weekends: true, // Exibir finais de semana
        events: [
          { id: '1', title: 'Reunião de Equipe', date: '2024-02-10' },
          { id: '2', title: 'Apresentação do Projeto', date: '2024-02-15' },
        ],
        dateClick: this.handleDateClick, // Adiciona evento ao clicar
        eventClick: this.handleEventClick, // Editar evento ao clicar
        eventDrop: this.handleEventDrop, // Atualizar evento ao arrastar
      },
      editDialog: false,
      eventTitle: '',
      selectedEvent: null,
      fullWidth: false
    }
  },
  methods: {
    toggleWeekends() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends
    },

    handleDateClick(info) {
      console.log(info)
      this.fullWidth = true
      //const title = prompt('Digite o nome do evento:')
      // if (title) {
      //   this.calendarOptions.events.push({
      //     id: String(Date.now()), // Gera um ID único
      //     title,
      //     date: info.dateStr,
      //   })
      // }
      // this.fullWidth = false
    },

    handleEventClick(info) {
      this.selectedEvent = info.event
      this.eventTitle = this.selectedEvent.title
      this.editDialog = true
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
