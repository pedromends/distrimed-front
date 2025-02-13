<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
				<q-toolbar-title> Agenda Distrimed </q-toolbar-title>
				<div>Agenda v1</div>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" bordered>
			<q-list>
				<div class="q-pa-sm row items-center justify-between">
					<h6>Salas disponíveis:</h6>
				</div>
				<EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
	import { defineComponent, ref } from 'vue'
	import EssentialLink from 'components/EssentialLink.vue'

	const linksList = [
		{
			title: 'Sala 1',
			caption: 'quasar.dev',
			icon: 'meeting_room',
			link: '/room-one',
		},
		{
			title: 'Sala 2',
			caption: 'github.com/quasarframework',
			icon: 'meeting_room',
			link: '/room-two',
		},
		{
			title: 'Sala 3',
			caption: 'chat.quasar.dev',
			icon: 'meeting_room',
			link: '/room-three',
		},
	]

	export default defineComponent({
		name: 'MainLayout',
		components: {
			EssentialLink,
		},
		data() {
			return {
				linksList,
				leftDrawerOpen: false,
			}
		},
		methods: {
			toggleLeftDrawer() {
				this.leftDrawerOpen = !this.leftDrawerOpen
			},
		},
		setup() {
			return {
				basic: ref(false),
				fullWidth: ref(false),
			}
		},
	})
</script>

<style>
	.add-btn {
		background-color: blue;
		color: white;
		border-radius: 50px;
		padding-left: 15px;
		padding-right: 15px;
	}
</style>
