export default function manageTodo(state = {
    todos: [],
  }, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return { todos: state.todos.concat(action.todo.name).concat(action.todo.number) };
  
      default:
        return state;
    }
  }