const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Página inicial
      { path: 'room-one', component: () => import('pages/RoomOne.vue') },  // Sem a barra no início
      { path: 'room-two', component: () => import('pages/RoomTwo.vue') },
      { path: 'room-three', component: () => import('pages/RoomThree.vue') }
    ],
  }
];

export default routes;
