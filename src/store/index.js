import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, date}) {
      const idx = state.tasks.findIndex(t => t.id === id)
      const task = state.tasks[idx]
      const status = new Date(date) > new Date() ? 'active' : 'outdated'
      state.tasks[idx] = {... task, date, description, status}
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id){
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'completed'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    completeTask({commit}, id) {
      commit('completeTask', id)
    }
  },
  getters: {
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(t => t.id === id)
  },
  modules: {
  }
})
