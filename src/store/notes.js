export default{
	state: {
		notesList: [
			{
				title: 'First Note',
				descr: 'Description for first none',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'base'
			},
			{
				title: 'Second Note',
				descr: 'Description for second none',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'vhigh'
			},
			{
				title: 'Third Note',
				descr: 'Description for third none',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'base'
			}
		]
	},
	mutations: {
		addNote(state, payload){
			state.notesList.push(payload)
		},
		removeNote(state, payload){
			state.notesList.splice(payload, 1)
		},
		renameField(state, payload){
			state.notesList[payload.index][payload.field] = payload.newVal
			state.notesList[payload.index].date = payload.date
		}
	},
	actions: {
		addNote({commit}, payload) {
			commit('addNote', payload)
		},
		removeNote({commit}, payload) {
			commit('removeNote', payload)
		},
		renameField({commit}, payload) {
			commit('renameField', payload)
		}
	},
	getters: {
	}
}