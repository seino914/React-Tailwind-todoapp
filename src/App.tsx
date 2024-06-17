import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { dummyTodoList } from './data/dummyTodoList';
import { AddTodoForm } from './components/AddTodoForm';

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
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidならcompletedを変更（true→false）
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  // 削除ボタン
  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) => {
      // 対象のidではないTodoを残す
      return prevTodoList.filter(todo =>
        todo.id !== id
      )
    })
  }

  return (
    <main className="mx-auto mt-10 max-w-xl">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="rounded bg-slate-200 p-5">
          <TodoList todoList={todoList} changeCompleted={changeCompleted} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </main>
  );
}

export default App;
