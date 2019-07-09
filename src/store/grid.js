export default{
	state: {
		grid: true
	},
	mutations: {
		setGrid(state, payload){
			state.grid = payload
		}
	},
	actions: {
		setGrid({commit}, payload) {
			commit('setGrid', payload)
		}
	},
	getters: {
	}
}