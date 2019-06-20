import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                {todo.content}
              </span>
            </div>
          );
        })
      ) : (
        <p className="center">You have no todos left. Yay.</p>
      )}
    </div>
  );
};

export default Todos;
