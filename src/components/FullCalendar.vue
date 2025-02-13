<template>
    <div class="q-pa-md">
        <h5>{{ pageTitle }}</h5>
        <FullCalendar :options="calendarOptions" class="q-mt-md" />
        <q-dialog v-model="createDialog">
            <q-card style="width: 700px">
                <q-card-section>
                    <div class="text-h6">Selecione um horário</div>
                </q-card-section>
                <q-separator />
                <div>
                    <q-input filled v-model="eventTitle" label="Nome do evento" lazy-rules
                        :rules="[(val) => (val && val.length > 0) || 'Por favor digite algo']" />
                    <div class="flex justify-center">
                        <q-time v-model="startHour" mask="HH:mm" label="Hora de Início" color="blue"
                            class="q-mr-md q-ml-md" />
                        <q-time v-model="endHour" mask="HH:mm" label="Hora de Término" color="blue"
                            class="q-mr-md q-ml-md" />
                    </div>
                </div>
                <q-card-actions align="around">
                    <q-btn color="primary" @click="saveNewEvent">Marcar</q-btn>
                    <q-btn color="red" v-close-popup>Cancelar</q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue3'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction'
    import ptLocale from '@fullcalendar/core/locales/pt'

    export default {
        name: 'FullCalendarComponent',
        props: {
            pageTitle: String,
            eventsProp: Array,
        },
        components: { FullCalendar },
        data() {
            return {
                createDialog: false,
                eventTitle: '',
                startHour: null,
                endHour: null,
                auxDate: null,
                calendarOptions: {
                    plugins: [dayGridPlugin, interactionPlugin],
                    locales: [ptLocale],
                    initialView: 'dayGridMonth',
                    selectable: true,
                    dateClick: this.handleDateClick,
                    events: [...this.eventsProp],
                },
            }
        },
        methods: {
            handleDateClick(info) {
                const today = new Date()
                const clickedDate = new Date(info.dateStr)
                if (clickedDate < today.setHours(0, 0, 0, 0)) {
                    alert('Não é possível agendar eventos em datas passadas.')
                } else {
                    this.createDialog = true
                    this.auxDate = info
                }
            },
            saveNewEvent() {
                if (!this.eventTitle) {
                    alert('Por favor, preencha o nome do evento.')
                    return
                }

                const [startH, startM] = this.startHour.split(':').map(Number)
                const [endH, endM] = this.endHour.split(':').map(Number)
                const newEventStart = new Date(this.auxDate.date.setHours(startH, startM))
                const newEventEnd = new Date(this.auxDate.date.setHours(endH, endM))

                if (newEventEnd <= newEventStart) {
                    alert('A hora de término deve ser posterior à hora de início.')
                    return
                }

                const hasConflict = this.eventsProp.some((event) => {
                    const eventStart = new Date(event.start)
                    const eventEnd = event.end ? new Date(event.end) : new Date(eventStart.getTime() + 60 * 60 * 1000)
                    return newEventStart < eventEnd && newEventEnd > eventStart
                })

                if (hasConflict) {
                    alert('A sala já está reservada neste horário.')
                    return
                }

                this.calendarOptions.events.push({
                    id: String(Date.now()),
                    title: this.eventTitle,
                    start: newEventStart.toISOString(),
                    end: newEventEnd.toISOString(),
                    location: this.pageTitle,
                })

                this.createDialog = false
                this.eventTitle = ''
                this.startHour = ''
                this.endHour = ''
            }
        }
    }
</script>

<style scoped>
    .q-pa-md {
        max-width: 800px;
        margin: auto;
    }

    @media (min-width: 600px) {
        .q-dialog__inner--minimized>div {
            max-width: 700px;
        }
    }
</style>
