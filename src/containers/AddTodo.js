import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../reducers/actions'

function AddTodo({dispatch}) {
  let element;

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(element.value))
    element.value = ''
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={(node) => element = node}/>
      <button>
        Add
      </button>
    </form>
  );
}

export default connect()(AddTodo)