// Redux
import { connect } from 'react-redux';
import {handleInputChange, handleSubmit, toggleCompleted, deleteItem} from './TodoActions';
import Todo from './Todo';

 const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    inputText: state.inputText
  };
};

 export default connect(
  mapStateToProps,
  { handleInputChange, handleSubmit, toggleCompleted, deleteItem }
)(Todo); 