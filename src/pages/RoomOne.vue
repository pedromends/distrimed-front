<template lang="">
  <q-page>
    <FullCalendar :pageTitle="'Sala 1'" :eventsProp="events" />
  </q-page>
</template>
<script>
import FullCalendar from 'components/FullCalendar.vue'
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      events: [
        {
          id: '1',
          title: 'Conferência de Tecnologia',
          start: '2025-02-12T08:00:00',
          end: '2025-02-12T09:30:00',
          location: "Sala 1"
        },
        {
          id: '2',
          title: 'Reunião de Alinhamento',
          start: '2025-02-12T10:00:00',
          end: '2025-02-12T11:00:00',
          location: "Sala 1"
        },
        {
          id: '3',
          title: 'Almoço com Cliente',
          start: '2025-02-12T12:30:00',
          end: '2025-02-12T13:30:00',
          location: "Sala 1"
        },
        {
          id: '4',
          title: 'Treinamento de Equipe',
          start: '2025-02-12T15:00:00',
          end: '2025-02-12T16:30:00',
          location: "Sala 1"
        },
        {
          id: '5',
          title: 'Apresentação de Resultados',
          start: '2025-02-13T09:00:00',
          end: '2025-02-13T10:30:00',
          location: "Sala 1"
        },
        {
          id: '6',
          title: 'Call com Parceiros',
          start: '2025-02-13T11:00:00',
          end: '2025-02-13T12:00:00',
          location: "Sala 1"
        },
        {
          id: '7',
          title: 'Almoço Executivo',
          start: '2025-02-13T12:30:00',
          end: '2025-02-13T13:30:00',
          location: "Sala 1"
        },
        {
          id: '8',
          title: 'Debate Estratégico',
          start: '2025-02-13T14:30:00',
          end: '2025-02-13T16:00:00',
          location: "Sala 1"
        },

        {
          id: '9',
          title: 'Sessão de Brainstorming',
          start: '2025-02-14T09:00:00',
          end: '2025-02-14T10:30:00',
          location: "Sala 1"
        },
        {
          id: '10',
          title: 'Mentoria Individual',
          start: '2025-02-14T11:30:00',
          end: '2025-02-14T12:30:00',
          location: "Sala 1"
        },
        {
          id: '11',
          title: 'Palestra Motivacional',
          start: '2025-02-14T14:00:00',
          end: '2025-02-14T15:30:00',
          location: "Sala 1"
        },
        {
            id: '12',
            title: 'Happy Hour',
            start: '2025-02-14T18:00:00',
            end: '2025-02-14T19:30:00',
            location: "Sala 1" },
        {
          id: '13',
          title: 'Planejamento de Campanha',
          start: '2025-02-16T08:30:00',
          end: '2025-02-16T10:00:00',
          location: "Sala 1"
        },
        {
          id: '14',
          title: 'Reunião de Equipe',
          start: '2025-02-16T11:00:00',
          end: '2025-02-16T12:00:00',
          location: "Sala 1"
        },
        {
            id: '15',
            title: 'Almoço',
            start: '2025-02-16T12:30:00',
            end: '2025-02-16T13:30:00',
            location: "Sala 1"
        },
        {
          id: '16',
          title: 'Apresentação de Projeto',
          start: '2025-02-16T15:00:00',
          end: '2025-02-16T16:00:00',
          location: "Sala 1"
        },

        {
          id: '17',
          title: 'Call com Clientes',
          start: '2025-02-17T08:00:00',
          end: '2025-02-17T09:00:00',
          location: "Sala 1"
        },
        {
          id: '18',
          title: 'Treinamento Técnico',
          start: '2025-02-17T10:30:00',
          end: '2025-02-17T12:00:00',
          location: "Sala 1"
        },
        {
          id: '19',
          title: 'Reunião com Diretoria',
          start: '2025-02-17T13:00:00',
          end: '2025-02-17T14:00:00',
          location: "Sala 1"
        },
        {
          id: '20',
          title: 'Análise de Dados',
          start: '2025-02-17T15:30:00',
          end: '2025-02-17T16:30:00',
          location: "Sala 1"
        },

        {
          id: '21',
          title: 'Workshop de Inovação',
          start: '2025-02-19T09:00:00',
          end: '2025-02-19T10:30:00',
          location: "Sala 1"
        },
        {
          id: '22',
          title: 'Almoço Executivo',
          start: '2025-02-19T12:00:00',
          end: '2025-02-19T13:30:00',
          location: "Sala 1"
        },
        {
          id: '23',
          title: 'Debate de Ideias',
          start: '2025-02-19T14:30:00',
          end: '2025-02-19T16:00:00',
          location: "Sala 1"
        },
        {
          id: '24',
          title: 'Revisão de Estratégias',
          start: '2025-02-19T17:00:00',
          end: '2025-02-19T18:00:00',
          location: "Sala 1"
        },

        {
          id: '25',
          title: 'Feira de Negócios',
          start: '2025-02-20T08:00:00',
          end: '2025-02-20T09:30:00',
          location: "Sala 1"
        },
        {
          id: '26',
          title: 'Palestra Internacional',
          start: '2025-02-20T10:30:00',
          end: '2025-02-20T12:00:00',
          location: "Sala 1"
        },
        {
          id: '27',
          title: 'Almoço com Investidores',
          start: '2025-02-20T12:30:00',
          end: '2025-02-20T13:30:00',
          location: "Sala 1"
        },
        {
          id: '28',
          title: 'Sessão de Perguntas e Respostas',
          start: '2025-02-20T15:00:00',
          end: '2025-02-20T16:00:00',
          location: "Sala 1"
        },

        {
          id: '29',
          title: 'Encerramento do Mês',
          start: '2025-02-26T17:30:00',
          end: '2025-02-26T18:30:00',
          location: "Sala 1"
        },
        {
          id: '30',
          title: 'Confraternização Final',
          start: '2025-02-27T19:00:00',
          end: '2025-02-27T20:30:00',
          location: "Sala 1"
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
