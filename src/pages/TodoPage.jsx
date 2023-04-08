import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate } from "react-router";
import useQuery from "../hooks/useQuery";
import {
  createTodo,
  deleteTodo,
  getTodoList,
  updateTodo,
} from "../util/todoApi";
import NavBar from "../components/NavBar";
import Todo from "../components/Todo";

const TodoPage = () => {
  const { isAuth, jwtToken } = useContext(AuthContext);
  const { isLoading, data } = useQuery(() => getTodoList(jwtToken));

  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [changedList, setChangedList] = useState([]);

  useEffect(() => {
    if (isLoading === false && data) setTodoList(data);
  }, [data, isLoading]);

  useEffect(() => {
    if (!changedList) return;

    todoList
      .filter((todo) => changedList.includes(todo.id))
      .forEach((todo) =>
        updateTodo(jwtToken, todo.id, todo.todo, todo.isCompleted)
      );
  }, [changedList, jwtToken]);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (newTodo === "") return;

    setNewTodo("");
    createTodo(jwtToken, newTodo).then((res) =>
      setTodoList([...todoList, res])
    );
  };

  const onChangeHandler = (id, changedTodo, changedIsCompleted) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, todo: changedTodo, isCompleted: changedIsCompleted };
      })
    );
    setChangedList([...changedList, id]);
  };

  const onDeleteHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    deleteTodo(jwtToken, id);
  };

  return (
    <div className="page">
      <NavBar />
      <h1>Todo List</h1>

      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            data-testid="new-todo-input"
            type="text"
            placeholder="할일을 적어주세요."
          />
          <button
            disabled={!newTodo}
            data-testid="new-todo-add-button"
            type="submit"
          >
            추가
          </button>
        </form>

        {isLoading ? (
          <div>loading~</div>
        ) : todoList.length === 0 ? (
          <div>할일을 등록해보세요 😀</div>
        ) : (
          <ul>
            {todoList?.map(({ id, todo, isCompleted }) => (
              <Todo
                key={id}
                todo={todo}
                isCompleted={isCompleted}
                onChangeHandler={(todo, isCompleted) =>
                  onChangeHandler(id, todo, isCompleted)
                }
                onDeleteHandler={() => onDeleteHandler(id)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoPage;
