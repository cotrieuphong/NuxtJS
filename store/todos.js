export const state = () => ({
  todos: [
    {
      id: 1,
      task: 'Code for 30 minute',
      completed: false,
    },
    {
      id: 2,
      task: 'Drink a cup of coffee',
      completed: false,
    },
    {
      id: 3,
      task: 'Listen to music for 5 minute',
      completed: false,
    },
  ],
})

export const mutations = {
  SET_TODOS(state, value) {
    const newTodo = {
      id: '',
      task: value,
      completed: false,
    }
    return (state.todos = [newTodo, ...state.todos])
  },
}
export const actions = {
  addTodo({ state, commit }, value) {
    commit('ADD_TODO', value)
  },
}
export const getters = {
  todosLenght: (state) => state.todos.length,
}
