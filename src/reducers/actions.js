export function removeTodo(index) {
  return {
    type : "REMOVE_TODO",
    toRemove : index
  }
}

export function addTodo(element) {
  return {
    type : "ADD_TODO",
    toAdd : element
  }
}