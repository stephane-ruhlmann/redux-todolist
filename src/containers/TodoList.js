import { connect } from 'react-redux'
import { removeTodo } from '../reducers/actions'
import List from '../components/List'

function mapStateToProps(state) {
  return {
    elements : state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRemove(index) {
      dispatch(removeTodo(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)