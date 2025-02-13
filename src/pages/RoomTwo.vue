<template lang="">
  <q-page>
    <FullCalendar :pageTitle="'Sala 2'" :eventsProp="events"/>
  </q-page>
</template>
<script>
  import FullCalendar from 'components/FullCalendar.vue'
export default {
  components:{
    FullCalendar
  },
  data() {
    return {
      events: [
        { "id": "1", "title": "Conferência Tecnologia", "start": "2025-02-12T08:00:00", "end": "2025-02-12T09:30:00", "location": "Sala 2" },
        { "id": "2", "title": "Reunião de Alinhamento", "start": "2025-02-12T10:00:00", "end": "2025-02-12T11:00:00", "location": "Sala 2" },
        { "id": "3", "title": "Treinamento de Equipe", "start": "2025-02-12T14:00:00", "end": "2025-02-12T16:00:00", "location": "Sala 2" },
        { "id": "4", "title": "Happy Hour", "start": "2025-02-12T18:30:00", "end": "2025-02-12T20:00:00", "location": "Sala 2" },
        { "id": "5", "title": "Apresentação de Resultados", "start": "2025-02-13T09:00:00", "end": "2025-02-13T10:30:00", "location": "Sala 2" },
        { "id": "6", "title": "Call com Parceiros", "start": "2025-02-13T11:00:00", "end": "2025-02-13T12:00:00", "location": "Sala 2" },
        { "id": "7", "title": "Almoço Executivo", "start": "2025-02-13T12:30:00", "end": "2025-02-13T13:30:00", "location": "Sala 2" },
        { "id": "8", "title": "Debate Estratégico", "start": "2025-02-13T14:30:00", "end": "2025-02-13T16:00:00", "location": "Sala 2" },
        { "id": "9", "title": "Planejamento de Produto", "start": "2025-02-14T08:30:00", "end": "2025-02-14T10:00:00", "location": "Sala 2" },
        { "id": "10", "title": "Sessão de Ideias", "start": "2025-02-14T10:30:00", "end": "2025-02-14T12:00:00", "location": "Sala 2" },
        { "id": "11", "title": "Workshop Criativo", "start": "2025-02-14T14:00:00", "end": "2025-02-14T16:00:00", "location": "Sala 2" },
        { "id": "12", "title": "Análise de Riscos", "start": "2025-02-14T17:30:00", "end": "2025-02-14T19:00:00", "location": "Sala 2" },
        { "id": "13", "title": "Reunião de Feedback", "start": "2025-02-15T08:30:00", "end": "2025-02-15T10:00:00", "location": "Sala 2" },
        { "id": "14", "title": "Call de Alinhamento", "start": "2025-02-15T10:30:00", "end": "2025-02-15T12:00:00", "location": "Sala 2" },
        { "id": "15", "title": "Estratégia de Marketing", "start": "2025-02-15T14:00:00", "end": "2025-02-15T15:30:00", "location": "Sala 2" },
        { "id": "16", "title": "Treinamento Corporativo", "start": "2025-02-15T17:00:00", "end": "2025-02-15T18:30:00", "location": "Sala 2" },
        { "id": "17", "title": "Planejamento de Projetos", "start": "2025-02-16T09:00:00", "end": "2025-02-16T10:30:00", "location": "Sala 2" },
        { "id": "18", "title": "Conferência Virtual", "start": "2025-02-16T11:00:00", "end": "2025-02-16T12:30:00", "location": "Sala 2" },
        { "id": "19", "title": "Almoço de Negócios", "start": "2025-02-16T12:45:00", "end": "2025-02-16T14:00:00", "location": "Sala 2" },
        { "id": "20", "title": "Palestra sobre Inovação", "start": "2025-02-16T14:30:00", "end": "2025-02-16T16:00:00", "location": "Sala 2" },
        { "id": "21", "title": "Reunião de Estratégia", "start": "2025-03-01T08:00:00", "end": "2025-03-01T09:30:00", "location": "Sala 2" },
        { "id": "22", "title": "Sessão de Ideias", "start": "2025-03-01T10:00:00", "end": "2025-03-01T11:30:00", "location": "Sala 2" },
        { "id": "23", "title": "Treinamento de Vendas", "start": "2025-03-01T12:00:00", "end": "2025-03-01T13:30:00", "location": "Sala 2" },
        { "id": "24", "title": "Almoço Executivo", "start": "2025-03-01T14:00:00", "end": "2025-03-01T15:00:00", "location": "Sala 2" },
        { "id": "25", "title": "Planejamento Financeiro", "start": "2025-03-02T09:00:00", "end": "2025-03-02T10:30:00", "location": "Sala 2" },
        { "id": "26", "title": "Análise de Desempenho", "start": "2025-03-02T11:00:00", "end": "2025-03-02T12:30:00", "location": "Sala 2" },
        { "id": "27", "title": "Webinar de Marketing", "start": "2025-03-02T14:00:00", "end": "2025-03-02T15:30:00", "location": "Sala 2" },
        { "id": "28", "title": "Reunião de Parcerias", "start": "2025-03-02T16:00:00", "end": "2025-03-02T17:30:00", "location": "Sala 2" },
        { "id": "29", "title": "Revisão de Metas", "start": "2025-03-03T09:00:00", "end": "2025-03-03T10:30:00", "location": "Sala 2" },
        { "id": "30", "title": "Almoço com Clientes", "start": "2025-03-03T12:00:00", "end": "2025-03-03T13:30:00", "location": "Sala 2" },
        { "id": "31", "title": "Debate sobre Mercado", "start": "2025-03-03T14:00:00", "end": "2025-03-03T15:30:00", "location": "Sala 2" },
        { "id": "32", "title": "Encerramento do Projeto", "start": "2025-03-03T16:30:00", "end": "2025-03-03T18:00:00", "location": "Sala 2" },
        { "id": "33", "title": "Estratégia de Crescimento", "start": "2025-03-04T08:30:00", "end": "2025-03-04T10:00:00", "location": "Sala 2" },
        { "id": "34", "title": "Discussão sobre Inovação", "start": "2025-03-04T10:30:00", "end": "2025-03-04T12:00:00", "location": "Sala 2" },
        { "id": "35", "title": "Seminário de Desenvolvimento", "start": "2025-03-04T12:30:00", "end": "2025-03-04T14:00:00", "location": "Sala 2" },
        { "id": "36", "title": "Encontro de Líderes", "start": "2025-03-04T14:30:00", "end": "2025-03-04T16:00:00", "location": "Sala 2" },
        { "id": "37", "title": "Sessão de Atualizações", "start": "2025-03-06T09:00:00", "end": "2025-03-06T10:30:00", "location": "Sala 2" },
        { "id": "38", "title": "Planejamento de Ações", "start": "2025-03-06T11:00:00", "end": "2025-03-06T12:30:00", "location": "Sala 2" },
        { "id": "39", "title": "Discussão de Mercado", "start": "2025-03-06T13:00:00", "end": "2025-03-06T14:30:00", "location": "Sala 2" },
        { "id": "40", "title": "Evento de Networking", "start": "2025-03-06T15:00:00", "end": "2025-03-06T16:30:00", "location": "Sala 2" }
      ]
    }
  }
}
</script>
<style lang="">

</style>
