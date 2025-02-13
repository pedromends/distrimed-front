<template lang="">
  <q-page>
    <FullCalendar :pageTitle="'Sala 3'" :eventsProp="events"/>
  </q-page>
</template>
<script>
  import FullCalendar from 'components/FullCalendar.vue'
export default {
  components:{
    FullCalendar
  },
  data(){
    return {
      events: [
        { "id": "1", "title": "Conferência Tecnologia", "start": "2025-02-13T08:00:00", "end": "2025-02-13T09:30:00", "location": "Sala 3" },
        { "id": "2", "title": "Reunião de Alinhamento", "start": "2025-02-13T10:00:00", "end": "2025-02-13T11:00:00", "location": "Sala 3" },
        { "id": "3", "title": "Treinamento de Equipe", "start": "2025-02-13T14:00:00", "end": "2025-02-13T16:00:00", "location": "Sala 3" },
        { "id": "4", "title": "Happy Hour", "start": "2025-02-13T18:30:00", "end": "2025-02-13T20:00:00", "location": "Sala 3" },
        { "id": "5", "title": "Apresentação de Resultados", "start": "2025-02-14T09:00:00", "end": "2025-02-14T10:30:00", "location": "Sala 3" },
        { "id": "6", "title": "Call com Parceiros", "start": "2025-02-14T11:00:00", "end": "2025-02-14T12:00:00", "location": "Sala 3" },
        { "id": "7", "title": "Almoço Executivo", "start": "2025-02-14T12:30:00", "end": "2025-02-14T13:30:00", "location": "Sala 3" },
        { "id": "8", "title": "Debate Estratégico", "start": "2025-02-14T14:30:00", "end": "2025-02-14T16:00:00", "location": "Sala 3" },
        { "id": "9", "title": "Planejamento de Produto", "start": "2025-02-15T08:30:00", "end": "2025-02-15T10:00:00", "location": "Sala 3" },
        { "id": "10", "title": "Sessão de Ideias", "start": "2025-02-15T10:30:00", "end": "2025-02-15T12:00:00", "location": "Sala 3" },
        { "id": "11", "title": "Workshop Criativo", "start": "2025-02-15T14:00:00", "end": "2025-02-15T16:00:00", "location": "Sala 3" },
        { "id": "12", "title": "Análise de Riscos", "start": "2025-02-15T17:30:00", "end": "2025-02-15T19:00:00", "location": "Sala 3" },
        { "id": "13", "title": "Reunião de Feedback", "start": "2025-02-16T08:30:00", "end": "2025-02-16T10:00:00", "location": "Sala 3" },
        { "id": "14", "title": "Call de Alinhamento", "start": "2025-02-16T10:30:00", "end": "2025-02-16T12:00:00", "location": "Sala 3" },
        { "id": "15", "title": "Estratégia de Marketing", "start": "2025-02-16T14:00:00", "end": "2025-02-16T15:30:00", "location": "Sala 3" },
        { "id": "16", "title": "Treinamento Corporativo", "start": "2025-02-16T17:00:00", "end": "2025-02-16T18:30:00", "location": "Sala 3" },
        { "id": "17", "title": "Planejamento de Projetos", "start": "2025-02-17T09:00:00", "end": "2025-02-17T10:30:00", "location": "Sala 3" },
        { "id": "18", "title": "Conferência Virtual", "start": "2025-02-17T11:00:00", "end": "2025-02-17T12:30:00", "location": "Sala 3" },
        { "id": "19", "title": "Almoço de Negócios", "start": "2025-02-17T12:45:00", "end": "2025-02-17T14:00:00", "location": "Sala 3" },
        { "id": "20", "title": "Palestra sobre Inovação", "start": "2025-02-17T14:30:00", "end": "2025-02-17T16:00:00", "location": "Sala 3" },
        { "id": "21", "title": "Reunião de Estratégia", "start": "2025-03-02T08:00:00", "end": "2025-03-02T09:30:00", "location": "Sala 3" },
        { "id": "22", "title": "Sessão de Ideias", "start": "2025-03-02T10:00:00", "end": "2025-03-02T11:30:00", "location": "Sala 3" },
        { "id": "23", "title": "Treinamento de Vendas", "start": "2025-03-02T12:00:00", "end": "2025-03-02T13:30:00", "location": "Sala 3" },
        { "id": "24", "title": "Almoço Executivo", "start": "2025-03-02T14:00:00", "end": "2025-03-02T15:00:00", "location": "Sala 3" },
        { "id": "25", "title": "Planejamento Financeiro", "start": "2025-03-03T09:00:00", "end": "2025-03-03T10:30:00", "location": "Sala 3" },
        { "id": "26", "title": "Análise de Desempenho", "start": "2025-03-03T11:00:00", "end": "2025-03-03T12:30:00", "location": "Sala 3" },
        { "id": "27", "title": "Webinar de Marketing", "start": "2025-03-03T14:00:00", "end": "2025-03-03T15:30:00", "location": "Sala 3" },
        { "id": "28", "title": "Reunião de Parcerias", "start": "2025-03-03T16:00:00", "end": "2025-03-03T17:30:00", "location": "Sala 3" },
        { "id": "29", "title": "Revisão de Metas", "start": "2025-03-04T09:00:00", "end": "2025-03-04T10:30:00", "location": "Sala 3" },
        { "id": "30", "title": "Almoço com Clientes", "start": "2025-03-04T12:00:00", "end": "2025-03-04T13:30:00", "location": "Sala 3" },
        { "id": "31", "title": "Debate sobre Mercado", "start": "2025-03-04T14:00:00", "end": "2025-03-04T15:30:00", "location": "Sala 3" },
        { "id": "32", "title": "Encerramento do Projeto", "start": "2025-03-04T16:30:00", "end": "2025-03-04T18:00:00", "location": "Sala 3" },
        { "id": "33", "title": "Estratégia de Crescimento", "start": "2025-03-05T08:30:00", "end": "2025-03-05T10:00:00", "location": "Sala 3" },
        { "id": "34", "title": "Discussão sobre Inovação", "start": "2025-03-05T10:30:00", "end": "2025-03-05T12:00:00", "location": "Sala 3" },
        { "id": "35", "title": "Seminário de Desenvolvimento", "start": "2025-03-05T12:30:00", "end": "2025-03-05T14:00:00", "location": "Sala 3" },
        { "id": "36", "title": "Encontro de Líderes", "start": "2025-03-05T14:30:00", "end": "2025-03-05T16:00:00", "location": "Sala 3" },
        { "id": "37", "title": "Sessão de Atualizações", "start": "2025-03-07T09:00:00", "end": "2025-03-07T10:30:00", "location": "Sala 3" },
        { "id": "38", "title": "Planejamento de Ações", "start": "2025-03-07T11:00:00", "end": "2025-03-07T12:30:00", "location": "Sala 3" },
        { "id": "39", "title": "Discussão de Mercado", "start": "2025-03-07T13:00:00", "end": "2025-03-07T14:30:00", "location": "Sala 3" },
        { "id": "40", "title": "Evento de Networking", "start": "2025-03-07T15:00:00", "end": "2025-03-07T16:30:00", "location": "Sala 3" }
      ]
    }
  }
}
</script>
<style lang="">

</style>
