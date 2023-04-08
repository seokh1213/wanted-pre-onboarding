import { useState } from "react";

const Todo = (
  { isCompleted, todo, onChangeHandler, onDeleteHandler } = {
    isCompleted: false,
    todo: "",
    onChangeHandler: (todo, isCompleted) => {},
    onDeleteHandler: () => {},
  }
) => {
  const [newTodo, setNewTodo] = useState(todo);
  const [isModify, setIsModify] = useState(false);

  return (
    <li>
      {isModify ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onChangeHandler(newTodo, isCompleted);
              setIsModify(false);
            }}
          >
            <input
              data-testid="modify-input"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" data-testid="submit-button">
              제출
            </button>
            <button
              type="button"
              onClick={() => setIsModify(false)}
              data-testid="cancel-button"
            >
              취소
            </button>
          </form>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => onChangeHandler(todo, !isCompleted)}
            />
            <span>{todo}</span>
          </label>
          <button onClick={() => setIsModify(true)} data-testid="modify-button">
            수정
          </button>
          <button onClick={onDeleteHandler} data-testid="delete-button">
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default Todo;
