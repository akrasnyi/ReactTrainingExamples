import TodoList, { ITodoList } from '../components/todoList';
import { connect } from 'react-redux';
import { GlobalStore } from '../types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: GlobalStore): ITodoList => ({
    todoList: state.todoList
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)