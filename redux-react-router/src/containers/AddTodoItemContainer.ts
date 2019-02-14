import AddTodoItem from '../components/addTodoItem';
import { connect } from 'react-redux';
import { GlobalStore } from '../types';
import { Dispatch } from 'redux';
import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodoItem: (title: string) => dispatch(addTodo(title)) 
});

export default connect(null, mapDispatchToProps)(AddTodoItem)