import React, { useState } from "react";
import { nanoid } from 'nanoid'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: nanoid(), task: "Learn React", completed: false },
    { id: nanoid(), task: "Learn Redux", completed: false },
    { id: nanoid(), task: "Learn Hooks", completed: false },
  ])
  const [newTask, setNewTask] = useState("")
  const [updateTask, setUpdateTask] = useState("")
  const [selectedTodo, setSelectedTodo] = useState(null)

  const addTodo = () => {
    if (newTask && !todos.find((todo) => todo.task === newTask)) {
      setTodos([...todos, { id: nanoid() , task: newTask, completed: false }])
      setNewTask("")
    }
  }

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const updateTodo = () => {
    if (updateTask && !todos.find((todo) => todo.task === updateTask)) {
      setTodos(
        todos.map((todo) =>
          todo.id === selectedTodo ? { ...todo, task: updateTask } : todo
        )
      )
      setSelectedTodo(null)
      setUpdateTask("")
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="todo-list">
    <h1>Todo List</h1>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {selectedTodo !== todo.id ? (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}
              />
              <span onClick={() => setSelectedTodo(todo.id)}>{todo.task}</span>
              <i className="fa fa-close" onClick={() => deleteTodo(todo.id)}></i>
            </>
          ) : (
            <div className="todo-update-form">
              <input
                type="text"
                placeholder="Update task"
                value={updateTask}
                onChange={(e) => setUpdateTask(e.target.value)}
              />
              <button onClick={updateTodo}>Update Todo</button>
            </div>
          )}
        </li>
      ))}
    </ul>
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  </div>
  )
}

export default TodoList
