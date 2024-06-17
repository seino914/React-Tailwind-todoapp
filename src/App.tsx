import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { dummyTodoList } from './data/dummyTodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoSummary } from './components/TodoSummary';

function App() {
  const [todoList, setTodoList] = useState(dummyTodoList);

  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      // 新しいTodoを作成
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      // Todoリストに追加
      return [newTodo, ...prevTodoList];
    });
  };

  // 対象のTodoの完了を変更
  const changeCompleted = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList(prevTodoList =>
      prevTodoList.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    )
  };

  // 削除ボタン
  const deleteTodo = (id: number) => {
    setTodoList(prevTodoList =>
      // 対象のidではないTodoを残す
      prevTodoList.filter(todo =>
        todo.id !== id
      )
    )
  }

  // 完了したTodoを全て削除
  const deleteAllCompleted = () => {
    // 完了していないTodoは残す
    setTodoList(prevTodoList =>
      prevTodoList.filter(todo =>
        !todo.completed
      )
    )
  }

  return (
    <main className="mx-auto mt-10 max-w-xl">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="rounded bg-slate-200 p-5">
          <TodoList todoList={todoList} changeCompleted={changeCompleted} deleteTodo={deleteTodo}/>
          <TodoSummary deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
