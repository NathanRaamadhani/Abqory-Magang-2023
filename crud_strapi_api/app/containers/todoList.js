    // todoList.js renders the todo list gotten from the Strapi backend.
   import TodoItem from "../components/todoItem";
    function TodoList({ todos, editTodoItem, deleteTodoItem }) {
      return (
        <div className="todoListContainer">
          <div className="todosText">Todos</div>
          {Array.isArray(todos) &&
          todos
            .map((todo, i) => (
              <TodoItem
                todo={todo}
                key={i}
                deleteTodoItem={deleteTodoItem}
                editTodoItem={editTodoItem}
              />
            ))}
        </div>
      );
    }
    export default TodoList;